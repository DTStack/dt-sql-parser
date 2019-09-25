const dtSqlParser = require('../lib/index');
const flinkParser  = require('../lib/lib/flinkParser').default;
const parser = dtSqlParser.parser;

console.log(flinkParser(`select * from user
 wh1ere a`))
console.time('t')
const sql = `INSERT INTO TABLE STUDENT_SCORES VALUES 
('1','111','68','69','90','CLASS1','DEPARTMENT1'),
('2','112','73','80','96','CLASS1','DEPARTMENT1'),
('3','113','90','74','75','CLASS1','DEPARTMENT1'),
('4','114','89','94','93','CLASS1','DEPARTMENT2'),
('5','115','99','93','89','CLASS1','DEPARTMENT1'),
('6','121','96','74','79','CLASS2','DEPARTMENT1'),
('7','122','89','86','85','CLASS2','DEPARTMENT1'),
('8','123','70','78','61','CLASS2','DEPARTMENT1'),
('9','124','76','70','76','CLASS2','DEPARTMENT1'),
('10','211','89','93','60','CLASS1','DEPARTMENT2'),
('11','212','76','83','75','CLASS1','DEPARTMENT2'),
('12','213','71','94','90','CLASS2','DEPARTMENT2'),
('13','214','94','94','66','CLASS1','DEPARTMENT2'),
('14','215','84','82','73','CLASS1','DEPARTMENT2'),
('15','216','85','74','93','CLASS1','DEPARTMENT2'),
('16','221','77','99','61','CLASS2','DEPARTMENT2'),
('17','222','80','78','96','CLASS2','DEPARTMENT2'),
('18','223','79','74','96','CLASS2','DEPARTMENT2'),
('19','224','75','80','78','CLASS2','DEPARTMENT2'),
('19','224','75','80','78','CLASS2','DEPARTMENT2'),
('19','224','75','80','78','CLASS2','DEPARTMENT2'),
('19','224','75','80','78','CLASS2','DEPARTMENT2'),
('19','224','75','80','78','CLASS2','DEPARTMENT2'),
('19','224','75','80','78','CLASS2','DEPARTMENT2'),
('19','224','75','80','78','CLASS2','DEPARTMENT2'),
('19','224','75','80','78','CLASS2','DEPARTMENT2'),
('20','225','82','85','63','CLASS2','DEPARTMENT2')`;
const result = parser.parserSql([sql, ''], 'hive');
console.timeEnd('t')