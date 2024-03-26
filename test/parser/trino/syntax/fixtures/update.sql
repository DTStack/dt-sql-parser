UPDATE foo_tablen  SET bar = 23, baz = 3.1415E0, bletch = 'barf' WHERE (nothing = 'fun');

UPDATE new_hires SET manager = (
    SELECT
      e.name
    FROM
      employees e
    WHERE
      e.employee_id = new_hires.manager_id
);
