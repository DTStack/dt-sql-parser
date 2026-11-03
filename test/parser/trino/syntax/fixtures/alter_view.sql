ALTER VIEW people RENAME TO users;
ALTER VIEW people SET AUTHORIZATION alice;
ALTER VIEW people SET AUTHORIZATION USER alice;
ALTER VIEW people SET AUTHORIZATION ROLE alice;
ALTER VIEW people REFRESH;
ALTER VIEW catalog.schema.people REFRESH;
alter view "my schema"."my view" refresh;
