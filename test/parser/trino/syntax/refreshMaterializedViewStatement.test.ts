import { TrinoSQL } from 'src/parser/trino';
import { readSQL } from 'test/helper';

const features = {
    refreshMaterializedView: readSQL(__dirname, 'refresh_materialized_view.sql'),
};

describe('TrinoSQL Refresh Materialized View Statements Syntax Tests', () => {
    const trino = new TrinoSQL();
    // refresh materialized view statements
    features.refreshMaterializedView.forEach((sql) => {
        it(sql, () => {
            expect(trino.validate(sql).length).toBe(0);
        });
    });
});
