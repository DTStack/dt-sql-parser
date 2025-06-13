INSERT INTO country_page_view
SELECT `user`,
    cnt
FROM page_view_source;

INSERT INTO catalog1.db1.country_page_view
SELECT `user`,
    cnt
FROM page_view_source;


--- Execute InsertStatement
EXECUTE
INSERT INTO country_page_view PARTITION (`date` = '2019-8-30', country = 'China')
SELECT `user`,
    cnt
FROM page_view_source;

--- Partition Clause: Static Partition
INSERT INTO country_page_view PARTITION (`date` = '2019-8-30', country = 'China')
SELECT `user`,
    cnt
FROM page_view_source;

--- Partition Clause:  Dynamic Partition
INSERT INTO country_page_view PARTITION (`date` = '2019-8-30') 
SELECT `user`,
    cnt,
    country
FROM page_view_source;

--- Column List Statement
INSERT INTO country_page_view PARTITION (`date` = '2019-8-30', country = 'China') (`date`, country)
SELECT `user`,
    cnt
FROM page_view_source;

--- Insert Method: OverWrite
INSERT OVERWRITE country_page_view PARTITION (`date` = '2019-8-30')
SELECT `user`,
    cnt,
    country
FROM page_view_source;

--- Insert with function
INSERT INTO hbase_table
SELECT
    st.id as rowKey,
    ROW(id, name, age) as baseInfo
FROM sourceTable st;


insert into rocketmq_sink_1
select
    'rocket_mq' as type_name,
    JSON_ARRAYAGG(sdsd) as col1,    --  PLAN_MONTH
    JSON_EXISTS(`columns`,'$[2].value') as col2,     --  STATUS
    JSON_STRING(`columns`,'$[6].value') as col3,    --  SUB_ID
    JSON_VALUE(`columns`,'$[22].value') as col4,    -- UNIONID
    JSON_QUERY(`columns`,'$[23].value') as col5,     -- UPDATE_TIME
    JSON_OBJECT(`columns`,'$[0].value') as col6,
    JSON_OBJECTAGG('sdsd'),
    content IS JSON AS is_valid_json,
    content IS JSON VALUE AS is_valid_json1,
    content IS JSON SCALAR AS is_valid_json2,
    content IS JSON ARRAY AS is_valid_json3,
    content IS JSON OBJECT AS is_valid_json4
from rocketmq_source
;


