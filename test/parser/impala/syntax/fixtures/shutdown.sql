-- :SHUTDOWN()
:SHUTDOWN();

-- :SHUTDOWN([host_name[:port_number] )
:SHUTDOWN("hostname:1234");
:SHUTDOWN('hostname');

-- :SHUTDOWN(deadline)
:SHUTDOWN(0);
:SHUTDOWN(10);

-- :SHUTDOWN([host_name[:port_number], deadline)
:SHUTDOWN('hostname', 10);
:SHUTDOWN('hostname:11', 10 * 60);
-- TODO: parser中 第二个 expression 的 COMMA 需要根据前面的内容来判断是否必填
:SHUTDOWN('hostname:11'10 * 60);
