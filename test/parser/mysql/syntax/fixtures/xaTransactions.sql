-- https://dev.mysql.com/doc/refman/8.0/en/xa-statements.html

/* XA {START|BEGIN} xid [JOIN|RESUME]

XA END xid [SUSPEND [FOR MIGRATE]]

XA PREPARE xid

XA COMMIT xid [ONE PHASE]

XA ROLLBACK xid

XA RECOVER [CONVERT xid] */


XA START 'transaction_id' JOIN;
XA START 'transaction_id' RESUME;
XA START 'transaction_id';
XA BEGIN 'transaction_id' RESUME;
XA BEGIN 'transaction_id' JOIN;
XA BEGIN 'transaction_id';

XA END 'transaction_id' SUSPEND FOR MIGRATE;
XA END 'transaction_id' SUSPEND;
XA END 'transaction_id';

XA PREPARE 'transaction_id';

XA COMMIT 'transaction_id' ONE PHASE;
XA COMMIT 'transaction_id';

XA ROLLBACK 'transaction_id';

XA RECOVER CONVERT 'transaction_id';
XA RECOVER;
