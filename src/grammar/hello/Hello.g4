grammar helloSQL;
r: 'hello' ID ;
ID: [a-z]+ ;
WS: [ \t\r\n]+ -> skip ;
