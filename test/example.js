const example={
    test0:`--alter table sx_622_1 add partition(pa=${"${bdp.system.bizdate}"});
    SELECT muyun_test_down1.id, muyun_test_down1.name, muyun_test_down2.age
    FROM muyun_test_down1
    JOIN muyun_test_down2                   
    ON muyun_test_down1.id = muyun_test_down2.id
    `,
    test1:`/*asf*/create table sql_task_comment_test(id int comment 'id') comment 'sql test';
    --sdfsss`,
    test2:`  /**/INSERT INTO TABLE muyun_test_down4
    SELECT /*lkaslfklasf*/ muyun_test_down1.id, muyun_test_down1.name, muyun_test_down2.age
    FROM /**/ muyun_test_down1
    JOIN muyun_test_down2                   
    ON muyun_test_down1.id = muyun_test_down2.id;`,
    test3:`--alter table sx_622_1 add partition(pa=${"${bdp.system.bizdate}"});
    alter table sx_622_1 add partition(pa=${"${bdp.system.cyctime}"});
    alter table sx_622_1 add partition(pa=${"${bdp.system.currmonth}"});
    alter table sx_622_1 add partition(pa=${"${bdp.system.premonth}"});`
}

module.exports=example;