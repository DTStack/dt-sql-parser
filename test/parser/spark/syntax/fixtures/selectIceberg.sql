select
    h.made_current_at,
    s.operation,
    h.snapshot_id,
    h.is_current_ancestor,
    s.summary['spark.app.id']
from prod.db.table.history h
join prod.db.table.snapshots s
  on h.snapshot_id = s.snapshot_id
order by made_current_at;

-- partition transform as a query predicate
select id, data
from prod.db.table
where system.days(ts) = '2021-01-01';
