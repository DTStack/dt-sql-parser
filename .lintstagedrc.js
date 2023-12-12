module.exports = {
    '*.js': [`prettier --write`],
    '*.ts': [`prettier --write`],
    '*.g4': [`antlr-format -c ./antlr.format.json -v`],
};
