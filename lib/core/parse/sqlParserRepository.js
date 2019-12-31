"use strict";
// Licensed to Cloudera, Inc. under one
// or more contributor license agreements.  See the NOTICE file
// distributed with this work for additional information
// regarding copyright ownership.  Cloudera, Inc. licenses this file
// to you under the Apache License, Version 2.0 (the
// "License"); you may not use this file except in compliance
// with the License.  You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable */
/**
 * AUTOCOMPLETE_MODULES and SYNTAX_MODULES are generated, do not edit manually, see tools/jison/generateParsers.js
 */
const AUTOCOMPLETE_MODULES = {
    calcite: require("calcite/calciteAutocompleteParser"),
    druid: require("druid/druidAutocompleteParser"),
    elasticsearch: require("elasticsearch/elasticsearchAutocompleteParser"),
    flink: require("flink/flinkAutocompleteParser"),
    generic: require("generic/genericAutocompleteParser"),
    hive: require("hive/hiveAutocompleteParser"),
    impala: require("impala/impalaAutocompleteParser"),
    ksql: require("ksql/ksqlAutocompleteParser"),
    phoenix: require("phoenix/phoenixAutocompleteParser"),
    presto: require("presto/prestoAutocompleteParser")
};
const SYNTAX_MODULES = {
    calcite: require("calcite/calciteSyntaxParser"),
    druid: require("druid/druidSyntaxParser"),
    elasticsearch: require("elasticsearch/elasticsearchSyntaxParser"),
    flink: require("flink/flinkSyntaxParser"),
    generic: require("generic/genericSyntaxParser"),
    hive: require("hive/hiveSyntaxParser"),
    impala: require("impala/impalaSyntaxParser"),
    ksql: require("ksql/ksqlSyntaxParser"),
    phoenix: require("phoenix/phoenixSyntaxParser"),
    presto: require("presto/prestoSyntaxParser")
};
/* eslint-enable */
class SqlParserRepository {
    constructor() {
        this.modulePromises = {};
    }
    getParser(sourceType, parserType) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.modulePromises[sourceType + parserType]) {
                const modules = parserType === 'Autocomplete' ? AUTOCOMPLETE_MODULES : SYNTAX_MODULES;
                this.modulePromises[sourceType + parserType] = new Promise((resolve, reject) => {
                    const targetModule = modules[sourceType] || modules.generic;
                    resolve(targetModule);
                });
            }
            return this.modulePromises[sourceType + parserType];
        });
    }
    getAutocompleter(sourceType) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.getParser(sourceType, 'Autocomplete');
        });
    }
    getSyntaxParser(sourceType) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.getParser(sourceType, 'Syntax');
        });
    }
}
const sqlParserRepository = new SqlParserRepository();
exports.default = sqlParserRepository;
