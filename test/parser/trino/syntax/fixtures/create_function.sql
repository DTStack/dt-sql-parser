CREATE FUNCTION example.default.meaning_of_life()
  RETURNS bigint
  BEGIN
    RETURN 42;
  END;


CREATE FUNCTION meaning_of_life() RETURNS bigint RETURN 42;