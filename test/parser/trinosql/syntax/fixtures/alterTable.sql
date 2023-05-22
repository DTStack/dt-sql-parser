alter table foo rename to bar;
alter table a.b.c rename to d.e.f;
alter table a.b.c rename column x to y;
alter table a.b.c add column x bigint;
alter table a.b.c add column x bigint comment 'large x';
alter table a.b.c add column x bigint with (weight = 2);
alter table a.b.c add column x bigint comment 'xtra' with (compression = 'LZ4', special = true);
alter table a.b.c drop column x;