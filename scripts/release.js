const inquirer = require('inquirer');

const { spawn } = require('child_process');

const runCommand = (command, args) => {
    return new Promise((resolve, reject) => {
        const executedCommand = spawn(command, args, {
            stdio: 'inherit',
            shell: true,
        });

        executedCommand.on('error', (error) => {
            reject({
                error,
                message: null,
                code: null,
            });
        });

        executedCommand.on('exit', (code) => {
            if (code === 0) {
                resolve({
                    error: null,
                    message: null,
                    code,
                });
            } else {
                reject({
                    error: null,
                    message: null,
                    code,
                });
            }
        });

        executedCommand.on('message', (message) => {
            resolve({
                error: null,
                message: message,
                code: null,
            });
        });
    });
};

function execStandardVersion(res) {
    const { bumpType, isPrerelease, prereleaseType, tagPrefix } = res;

    let cmd = `standard-version --release-as ${bumpType} `;
    if (isPrerelease) {
        cmd += ` --prerelease ${prereleaseType} `;
    }
    cmd += ` --tag-prefix ${tagPrefix} `;
    cmd += ' --infile CHANGELOG.md ';

    console.log(`Executing: ${cmd} \n`);

    runCommand(cmd)
        .then(({ message }) => {
            console.log('Please checkout recent commit, and then');
            console.log(
                'Push branch and new tag to github, publish package to npm'
            );
            // message && console.log(message)
        })
        .catch(({ error, code }) => {
            code && console.error('Error: process exit code' + code);
            error && console.error(error);
        });
}

inquirer
    .prompt([
        {
            type: 'list',
            name: 'bumpType',
            message: 'Which type you want bump',
            choices: ['major', 'minor', 'patch'],
            loop: false,
        },
        {
            type: 'confirm',
            name: 'isPrerelease',
            message: 'Is a prerelease? Default is no',
            default: false,
            loop: false,
        },
        {
            type: 'list',
            name: 'prereleaseType',
            message: 'What is the current stage',
            choices: ['alpha', 'beta'],
            when: (answer) => {
                return answer.isPrerelease;
            },
            loop: false,
        },
        {
            type: 'input',
            name: 'tagPrefix',
            message: 'Input git tag prefix, default is',
            default: 'v',
            loop: false,
        },
    ])
    .then(execStandardVersion);
