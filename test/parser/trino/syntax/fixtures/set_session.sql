SET SESSION foo = 'bar';
SET SESSION foo.bar = 'baz';
SET SESSION foo.bar.boo = 'baz';
SET SESSION foo.bar = 'ban' || 'ana';

SET SESSION AUTHORIZATION 'John';
SET SESSION AUTHORIZATION John;
SET SESSION AUTHORIZATION "John";