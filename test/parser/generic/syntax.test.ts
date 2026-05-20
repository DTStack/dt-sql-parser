import { GenericSQL } from 'src/parser/generic';

describe('GenericSQL Syntax Tests', () => {
    const parser = new GenericSQL();

    describe('SELECT Statements', () => {
        const features = {
            select: ['SELECT * FROM users'],
            selectWithWhere: ['SELECT * FROM users WHERE id = 1'],
            selectWithJoin: [
                'SELECT u.name, o.amount FROM users u JOIN orders o ON u.id = o.user_id',
            ],
            selectWithGroupBy: ['SELECT name, id FROM employees GROUP BY name, id'],
            selectWithOrderBy: ['SELECT * FROM users ORDER BY name ASC'],
            selectWithLimit: ['SELECT * FROM users LIMIT 10'],
        };

        features.select.forEach((sql) => {
            it(sql, () => {
                expect(parser.validate(sql).length).toBe(0);
            });
        });

        features.selectWithWhere.forEach((sql) => {
            it(sql, () => {
                expect(parser.validate(sql).length).toBe(0);
            });
        });

        features.selectWithJoin.forEach((sql) => {
            it(sql, () => {
                expect(parser.validate(sql).length).toBe(0);
            });
        });

        features.selectWithGroupBy.forEach((sql) => {
            it(sql, () => {
                expect(parser.validate(sql).length).toBe(0);
            });
        });

        features.selectWithOrderBy.forEach((sql) => {
            it(sql, () => {
                expect(parser.validate(sql).length).toBe(0);
            });
        });

        features.selectWithLimit.forEach((sql) => {
            it(sql, () => {
                expect(parser.validate(sql).length).toBe(0);
            });
        });
    });

    describe('INSERT Statements', () => {
        const features = {
            insert: [`INSERT INTO users SELECT * FROM temp_users`],
            insertWithColumnList: [
                `INSERT INTO users (name, email) SELECT name, email FROM temp_users`,
            ],
        };

        features.insert.forEach((sql) => {
            it(sql, () => {
                expect(parser.validate(sql).length).toBe(0);
            });
        });

        features.insertWithColumnList.forEach((sql) => {
            it(sql, () => {
                expect(parser.validate(sql).length).toBe(0);
            });
        });
    });

    describe('UPDATE Statements', () => {
        const features = {
            update: [`UPDATE users SET name = 'Jane' WHERE id = 1`],
            updateMultiple: [
                `UPDATE users SET name = 'Jane', email = 'jane@example.com' WHERE id = 1`,
            ],
        };

        features.update.forEach((sql) => {
            it(sql, () => {
                expect(parser.validate(sql).length).toBe(0);
            });
        });

        features.updateMultiple.forEach((sql) => {
            it(sql, () => {
                expect(parser.validate(sql).length).toBe(0);
            });
        });
    });

    describe('DELETE Statements', () => {
        const features = {
            delete: ['DELETE FROM users WHERE id = 1'],
            deleteWithoutWhere: ['DELETE FROM users'],
        };

        features.delete.forEach((sql) => {
            it(sql, () => {
                expect(parser.validate(sql).length).toBe(0);
            });
        });

        features.deleteWithoutWhere.forEach((sql) => {
            it(sql, () => {
                expect(parser.validate(sql).length).toBe(0);
            });
        });
    });

    describe('CREATE TABLE Statements', () => {
        const features = {
            createTable: [
                `CREATE TABLE users (
                    id INT PRIMARY KEY,
                    name VARCHAR(100) NOT NULL,
                    email VARCHAR(255)
                )`,
            ],
            createTableWithConstraints: [
                `CREATE TABLE orders (
                    id INT PRIMARY KEY,
                    user_id INT,
                    amount DECIMAL(10, 2),
                    UNIQUE (user_id),
                    FOREIGN KEY (user_id) REFERENCES users(id)
                )`,
            ],
        };

        features.createTable.forEach((sql) => {
            it(sql, () => {
                expect(parser.validate(sql).length).toBe(0);
            });
        });

        features.createTableWithConstraints.forEach((sql) => {
            it(sql, () => {
                expect(parser.validate(sql).length).toBe(0);
            });
        });
    });

    describe('ALTER TABLE Statements', () => {
        const features = {
            addColumn: ['ALTER TABLE users ADD COLUMN age INT'],
            dropColumn: ['ALTER TABLE users DROP COLUMN age'],
            renameTable: ['ALTER TABLE users RENAME TO people'],
        };

        features.addColumn.forEach((sql) => {
            it(sql, () => {
                expect(parser.validate(sql).length).toBe(0);
            });
        });

        features.dropColumn.forEach((sql) => {
            it(sql, () => {
                expect(parser.validate(sql).length).toBe(0);
            });
        });

        features.renameTable.forEach((sql) => {
            it(sql, () => {
                expect(parser.validate(sql).length).toBe(0);
            });
        });
    });

    describe('DROP TABLE Statements', () => {
        const features = {
            dropTable: ['DROP TABLE users'],
            dropTableIfExists: ['DROP TABLE IF EXISTS users'],
        };

        features.dropTable.forEach((sql) => {
            it(sql, () => {
                expect(parser.validate(sql).length).toBe(0);
            });
        });

        features.dropTableIfExists.forEach((sql) => {
            it(sql, () => {
                expect(parser.validate(sql).length).toBe(0);
            });
        });
    });

    describe('Complex Queries', () => {
        const features = {
            union: ['SELECT name FROM users UNION SELECT name FROM employees'],
            subquery: ['SELECT * FROM users WHERE id IN (SELECT user_id FROM orders)'],
            cte: [
                `WITH active_users AS (
                    SELECT * FROM users WHERE status = 'active'
                )
                SELECT * FROM active_users`,
            ],
        };

        features.union.forEach((sql) => {
            it(sql, () => {
                expect(parser.validate(sql).length).toBe(0);
            });
        });

        features.subquery.forEach((sql) => {
            it(sql, () => {
                expect(parser.validate(sql).length).toBe(0);
            });
        });

        features.cte.forEach((sql) => {
            it(sql, () => {
                expect(parser.validate(sql).length).toBe(0);
            });
        });
    });
});
