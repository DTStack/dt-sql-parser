CREATE FUNCTION example.default.meaning_of_life()
  RETURNS bigint
  BEGIN
    RETURN 42;
  END;


CREATE FUNCTION meaning_of_life() RETURNS bigint RETURN 42;

-- Function with DECLARE and ELSEIF (variableDeclaration + elseIfClause inlined)
CREATE FUNCTION check_value(x integer)
  RETURNS varchar
  BEGIN
    DECLARE result varchar DEFAULT 'unknown';
    IF x > 100 THEN
      SET result = 'high';
    ELSEIF x > 50 THEN
      SET result = 'medium';
    ELSEIF x > 0 THEN
      SET result = 'low';
    ELSE
      SET result = 'negative';
    END IF;
    RETURN result;
  END;