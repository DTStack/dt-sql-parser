
const fs = require('fs');
const path = require('path');
const exec = require('child_process').exec;

const LICENSE =
  '// Licensed to Cloudera, Inc. under one\n' +
  '// or more contributor license agreements.  See the NOTICE file\n' +
  '// distributed with this work for additional information\n' +
  '// regarding copyright ownership.  Cloudera, Inc. licenses this file\n' +
  '// to you under the Apache License, Version 2.0 (the\n' +
  '// "License"); you may not use this file except in compliance\n' +
  '// with the License.  You may obtain a copy of the License at\n' +
  '//\n' +
  '//     http://www.apache.org/licenses/LICENSE-2.0\n' +
  '//\n' +
  '// Unless required by applicable law or agreed to in writing, software\n' +
  '// distributed under the License is distributed on an "AS IS" BASIS,\n' +
  '// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n' +
  '// See the License for the specific language governing permissions and\n' +
  '// limitations under the License.\n';

const SQL_STATEMENTS_PARSER_JSDOC =
  '/**\n' +
  ' * @param {string} input\n' +
  ' *\n' +
  ' * @return {SqlStatementsParserResult}\n' +
  ' */\n';

const PARSER_FOLDER = path.join(process.cwd(), 'src/core/parse/');
const JISON_FOLDER = path.join(process.cwd(), 'src/jison/');
const SQL_PARSER_REPOSITORY_PATH = path.join(PARSER_FOLDER, 'sqlParserRepository.js');
const SYNTAX_PARSER_IMPORT_TEMPLATE =
  '  KEY: require("KEY/KEYSyntaxParser")';
const AUTOCOMPLETE_PARSER_IMPORT_TEMPLATE =
  '  KEY: require("KEY/KEYAutocompleteParser")';

const parserDefinitions = {
  globalSearchParser: {
    sources: [path.join(JISON_FOLDER, 'globalSearchParser.jison')],
    target: path.join(JISON_FOLDER ,'globalSearchParser.jison'),
    outputFolder: PARSER_FOLDER,
    afterParse: contents =>
      new Promise(resolve => {
        resolve(
          LICENSE +
            contents.replace(
              'var globalSearchParser = ',
              "import SqlParseSupport from './sqlParseSupport';\n\nvar globalSearchParser = "
            ) +
            '\nexport default globalSearchParser;\n'
        );
      })
  },
  solrFormulaParser: {
    sources: [path.join(JISON_FOLDER, 'solrFormulaParser.jison')],
    target: path.join(JISON_FOLDER, 'solrFormulaParser.jison'),
    outputFolder: PARSER_FOLDER,
    afterParse: contents =>
      new Promise(resolve => {
        resolve(LICENSE + contents + 'export default solrFormulaParser;\n');
      })
  },
  solrQueryParser: {
    sources: [path.join(JISON_FOLDER, 'solrQueryParser.jison')],
    target: path.join(JISON_FOLDER, 'solrQueryParser.jison'),
    outputFolder: PARSER_FOLDER,
    afterParse: contents =>
      new Promise(resolve => {
        resolve(LICENSE + contents + 'export default solrQueryParser;\n');
      })
  },
  sqlStatementsParser: {
    sources: [path.join(JISON_FOLDER, 'sqlStatementsParser.jison')],
    target: path.join(JISON_FOLDER, 'sqlStatementsParser.jison'),
    outputFolder: PARSER_FOLDER,
    afterParse: contents =>
      new Promise(resolve => {
        resolve(
          LICENSE +
            contents.replace(
              'parse: function parse',
              SQL_STATEMENTS_PARSER_JSDOC + 'parse: function parse'
            ) +
            'export default sqlStatementsParser;\n'
        );
      })
  }
};

const mkdir = path =>
  new Promise((resolve, reject) => {
    if (fs.existsSync(path)) {
      resolve();
    } else {
      fs.mkdir(path, err => {
        if (err) {
          reject(err);
        }
        resolve();
      });
    }
  });

const readFile = path =>
  new Promise((resolve, reject) => {
    fs.readFile(path, (err, buf) => {
      if (err) {
        reject(err);
      }
      resolve(buf ? buf.toString() : '');
    });
  });

const writeFile = (path, contents) =>
  new Promise((resolve, reject) => {
    fs.writeFile(path, contents, err => {
      if (err) {
        reject();
      }
      resolve();
    });
  });

const copyFile = (source, destination, contentsCallback) =>
  new Promise((resolve, reject) => {
    readFile(source)
      .then(contents => {
        writeFile(destination, contentsCallback ? contentsCallback(contents) : contents)
          .then(resolve)
          .catch(reject);
      })
      .catch(reject);
  });

const deleteFile = path => {
  fs.unlinkSync(path);
};

const execCmd = cmd =>
  new Promise((resolve, reject) => {
    exec(cmd, (err, stdout, stderr) => {
      if (err) {
        reject('stderr:\n' + stderr + '\n\nstdout:\n' + stdout);
      }
      resolve(stdout);
    });
  });

const generateParser = parserName =>
  new Promise((resolve, reject) => {
    const parserConfig = parserDefinitions[parserName];

    /**
     * 合并jison文件，生成待编译文件
     */
    const concatPromise = new Promise((resolve, reject) => {
      if (parserConfig.sources.length > 1 && parserConfig.target) {
        console.log('Concatenating files...');
        const promises = parserConfig.sources.map(fileName => readFile(fileName));

        Promise.all(promises)
          .then(contents => {
            writeFile(parserConfig.target, contents.join('')).then(() => {
              resolve(parserConfig.target);
            });
          })
          .catch(reject);
      } else if (parserConfig.sources.length === 1) {
        resolve(parserConfig.sources[0]);
      } else {
        reject('No jison source specified');
      }
    });

    concatPromise
      .then(targetPath => {
        console.log(`Generate precomplier jison success（${targetPath}）...`);
        let jisonCommand = 'jison ' + targetPath;
        if (parserConfig.lexer) {
          jisonCommand += ' ' + parserConfig.lexer;
        }
        jisonCommand += ' -m js';
        console.log('Generating parser...');
        execCmd(jisonCommand)
          .then(stdout => {
            if (/\S/.test(stdout)) {
              console.log('got output for: ' + jisonCommand);
              console.log(stdout);
            }
            if (parserConfig.sources.length > 1) {
              deleteFile(targetPath); // Remove concatenated file
            }
            console.log('Adjusting JS...');
            /**
             * 删除生成文件，复制到配置的文件夹中
             */
            const generatedJsFileName = parserConfig.target
              .replace('.jison', '.js')
              .replace(/^.*\/([^/]+)$/, '$1');
            readFile(generatedJsFileName)
              .then(contents => {
                parserConfig
                  .afterParse(contents)
                  .then(finalContents => {
                    writeFile(path.join(parserConfig.outputFolder, generatedJsFileName), finalContents)
                      .then(() => {
                        deleteFile(generatedJsFileName);
                        resolve();
                      })
                      .catch(reject);
                  })
                  .catch(reject);
              })
              .catch(reject);
          })
          .catch(reject);
      })
      .catch(reject);
  });

let parsersToGenerate = [];
const invalid = [];

let all = false;

const listDir = folder =>
  new Promise(resolve => {
    fs.readdir(folder, (err, files) => {
      resolve(files);
    });
  });
/**
 * 构造，添加子语言模块编译配置
 * @param {*} fileIndex 文件的存在表
 * @param {*} folder 对应的子语言文件夹
 * @param {*} sharedFiles 子语言核心jison文件
 * @param {*} autocomplete 是否为补全文件
 */
const findParser = (fileIndex, folder, sharedFiles, autocomplete) => {
  const prefix = autocomplete ? 'autocomplete' : 'syntax';
  if (fileIndex[prefix + '_header.jison'] && fileIndex[prefix + '_footer.jison']) {
    const parserName = folder + (autocomplete ? 'AutocompleteParser' : 'SyntaxParser');
    const parserDefinition = {
      sources: [path.join(JISON_FOLDER, 'sql', folder, prefix + '_header.jison')].concat(sharedFiles),
      lexer: path.join(JISON_FOLDER, 'sql', folder, '/sql.jisonlex'),
      target: path.join(JISON_FOLDER, 'sql', folder, parserName + '.jison'),
      sqlParser: autocomplete ? 'AUTOCOMPLETE' : 'SYNTAX',
      outputFolder: path.join(PARSER_FOLDER, folder),
      afterParse: contents =>
        new Promise(resolve => {
          resolve(
            LICENSE +
              contents
                .replace(
                  'var ' + parserName + ' = ',
                  "import SqlParseSupport from " +
                    "'./sqlParseSupport';\n\nvar " +
                    parserName +
                    ' = '
                )
                .replace(
                  'loc: yyloc,',
                  "loc: lexer.yylloc, ruleId: stack.slice(stack.length - 2, stack.length).join(''),"
                ) +
              '\nexport default ' +
              parserName +
              ';\n'
          );
        })
    };

    parserDefinition.sources.push(path.join(JISON_FOLDER, 'sql', folder, prefix + '_footer.jison'));
    parserDefinitions[parserName] = parserDefinition;
  } else {
    console.log(
      "Warn: Could not find '" +
        prefix +
        "_header.jison' or '" +
        prefix +
        "_footer.jison' in " +
        JISON_FOLDER +
        'sql/' +
        folder +
        '/'
    );
  }
};

/**
 * 添加所有子语言编译配置
 */
const identifySqlParsers = () =>
  new Promise(resolve => {
    listDir(JISON_FOLDER + 'sql').then(files => {
      const promises = [];
      files.forEach(folder => {
        const subLanguageJisonFolder = path.join(JISON_FOLDER, 'sql', folder);
        promises.push(
          /**
           * 遍历具体的语言目录
           */
          
          listDir(subLanguageJisonFolder).then(jisonFiles => {
            /**
             * 文件目录记录表
             */
            const fileIndex = {};
            jisonFiles.forEach(jisonFile => {
              fileIndex[jisonFile] = true;
            });

            /**
             * 挑选核心的jison文件（剥除autocomplate，syntax的功能文件）
             */
            const sharedFiles = jisonFiles
              .filter(jisonFile => jisonFile.indexOf('sql_') !== -1)
              .map(jisonFile => path.join(subLanguageJisonFolder, jisonFile));

            if (fileIndex['sql.jisonlex']) {
              /**
               * 添加子语言自动补全编译配置
               * 加入了error.jison，为了在校验失败的情况下也能够提示？
               */
              findParser(fileIndex, folder, sharedFiles, true);
              /**
               * 添加子语言语法检查配置
               */
              findParser(
                fileIndex,
                folder,
                sharedFiles.filter(path => path.indexOf('_error.jison') === -1),
                false
              );
            } else {
              console.log(
                "Warn: Could not find 'sql.jisonlex' in " + JISON_FOLDER + 'sql/' + folder + '/'
              );
            }
          })
        );
      });
      Promise.all(promises).then(resolve);
    });
  });

const copyTests = (source, target) =>
  new Promise((resolve, reject) => {
    const replaceRegexp = new RegExp(source + '(Autocomplete|Syntax)Parser', 'g');
    mkdir(PARSER_FOLDER + target)
      .then(() => {
        mkdir(PARSER_FOLDER + target + '/test')
          .then(() => {
            listDir(PARSER_FOLDER + source + '/test')
              .then(testFiles => {
                const copyPromises = [];
                testFiles.forEach(testFile => {
                  copyPromises.push(
                    copyFile(
                      PARSER_FOLDER + source + '/test/' + testFile,
                      PARSER_FOLDER + target + '/test/' + testFile.replace(source, target),
                      contents => contents.replace(replaceRegexp, target + '$1Parser')
                    )
                  );
                });
                Promise.all(copyPromises)
                  .then(resolve)
                  .catch(reject);
              })
              .catch(reject);
          })
          .catch(reject);
      })
      .catch(reject);
  });

  /**
   * 校验，配置自定义语言
   */
const prepareForNewParser = () =>
  new Promise((resolve, reject) => {
    /**
     * 根据一个子语言文件夹来生成一个特殊sql名字的语法文件
     * -new generic postgresql
     * 根据generic文件夹生成postgresql语法文件
     */
    if (process.argv.length === 3 && process.argv[0] === '-new') {
      process.argv.shift();
      const source = process.argv.shift();
      const target = process.argv.shift();
      console.log("Generating new parser '" + target + "' based on '" + source + "'...");
      process.argv.push(target);

      if (
        !Object.keys(parserDefinitions).some(key => {
          if (key.indexOf(source) === 0) {
            copyTests(source, target)
              .then(() => {
                mkdir(JISON_FOLDER + 'sql/' + target)
                  .then(() => {
                    listDir(JISON_FOLDER + 'sql/' + source).then(files => {
                      const copyPromises = [];
                      files.forEach(file => {
                        copyPromises.push(
                          copyFile(
                            JISON_FOLDER + 'sql/' + source + '/' + file,
                            JISON_FOLDER + 'sql/' + target + '/' + file
                          )
                        );
                      });
                      Promise.all(copyPromises).then(() => {
                        const autocompleteSources = [
                          'sql/' + target + '/autocomplete_header.jison'
                        ];
                        const syntaxSources = ['sql/' + target + '/syntax_header.jison'];

                        files.forEach(file => {
                          if (file.indexOf('sql_') === 0) {
                            autocompleteSources.push('sql/' + target + '/' + file);
                            syntaxSources.push('sql/' + target + '/' + file);
                          }
                        });
                        autocompleteSources.push('sql/' + target + '/autocomplete_footer.jison');
                        syntaxSources.push('sql/' + target + '/syntax_footer.jison');
                        mkdir('desktop/core/src/desktop/js/parse/sql/' + target).then(() => {
                          copyFile(
                            'desktop/core/src/desktop/js/parse/sql/' +
                              source +
                              '/sqlParseSupport.js',
                            'desktop/core/src/desktop/js/parse/sql/' +
                              target +
                              '/sqlParseSupport.js',
                            contents =>
                              contents.replace(
                                /parser\.yy\.activeDialect = '[^']+';'/g,
                                "parser.yy.activeDialect = '" + target + "';"
                              )
                          ).then(() => {
                            identifySqlParsers()
                              .then(resolve)
                              .catch(reject);
                          });
                        });
                      });
                    });
                  })
                  .catch(err => {
                    console.log(err);
                  });
              })
              .catch(reject);
            return true;
          }
        })
      ) {
        reject("No existing parser found for '" + source + "'");
      }
    } else {
      resolve();
    }
  });

identifySqlParsers().then(() => {
  process.argv.shift();
  process.argv.shift();
  console.log('Generate sub language success...');
  prepareForNewParser().then(() => {
    console.log('Generate custom language success...');
    process.argv.forEach(arg => {
      if (arg === 'all') {
        /**
         * 编译全部
         */
        all = true;
      } else if (parserDefinitions[arg]) {
        /**
         * 特点编译目标
         */
        parsersToGenerate.push(arg);
      } else {
        /**
         * 根据关键字匹配编译目标
         */
        let prefixFound = false;
        Object.keys(parserDefinitions).forEach(key => {
          if (key.indexOf(arg) === 0) {
            prefixFound = true;
            parsersToGenerate.push(key);
          }
        });
        if (!prefixFound) {
          invalid.push(arg);
        }
      }
    });

    if (all) {
      parsersToGenerate = Object.keys(parserDefinitions);
    }

    if (invalid.length) {
      console.log("No parser config found for: '" + invalid.join("', '") + "'");
      console.log(
        '\nPossible options are:\n  ' +
          ['all'].concat(Object.keys(parserDefinitions)).join('\n  ') +
          '\n'
      );
      return;
    }
    
    const parserCount = parsersToGenerate.length;
    let idx = 0;
    /**
     * 执行编译
     */
    const generateRecursive = () => {
      idx++;
      if (parsersToGenerate.length) {
        const parserName = parsersToGenerate.pop();
        if (parserCount > 1) {
          console.log("Generating '" + parserName + "' (" + idx + '/' + parserCount + ')...');
        } else {
          console.log("Generating '" + parserName + "'...");
        }
        generateParser(parserName)
          .then(generateRecursive)
          .catch(error => {
            console.log(error);
            console.log('FAIL!');
          });
      } else {
        const autocompParsers = [];
        const syntaxParsers = [];
        console.log('Updating sqlParserRepository.js...');
        Object.keys(parserDefinitions).forEach(key => {
          if (parserDefinitions[key].sqlParser === 'AUTOCOMPLETE') {
            autocompParsers.push(
              AUTOCOMPLETE_PARSER_IMPORT_TEMPLATE.replace(
                /KEY/g,
                key.replace('AutocompleteParser', '')
              )
            );
          } else if (parserDefinitions[key].sqlParser === 'SYNTAX') {
            syntaxParsers.push(
              SYNTAX_PARSER_IMPORT_TEMPLATE.replace(/KEY/g, key.replace('SyntaxParser', ''))
            );
          }
        });
        readFile(SQL_PARSER_REPOSITORY_PATH).then(contents => {
          contents = contents.replace(
            /const SYNTAX_MODULES = [^}]+}/,
            'const SYNTAX_MODULES = {\n' + syntaxParsers.sort().join(',\n') + '\n}'
          );
          contents = contents.replace(
            /const AUTOCOMPLETE_MODULES = [^}]+}/,
            'const AUTOCOMPLETE_MODULES = {\n' + autocompParsers.sort().join(',\n') + '\n}'
          );
          writeFile(SQL_PARSER_REPOSITORY_PATH, contents).then(() => {
            console.log('Done!\n');
          });
        });
      }
    };
    /**
     * 集中精力办大事
     */
    generateRecursive();
  });
});

/* eslint-enable no-restricted-syntax */
