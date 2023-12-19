import { TrinoSQL } from '../../../filters';
import { readSQL } from '../../../helper';

const features = {
    refreshMaterializedView: readSQL(__dirname, 'refresh_materialized_view.sql'),
};

describe('TrinoSQL Refresh Materialized View Statements Syntax Tests', () => {
    const parser = new TrinoSQL();
    // refresh materialized view statements
    features.refreshMaterializedView.forEach((sql) => {
        it(sql, () => {
            expect(parser.validate(sql).length).toBe(0);
        });
    });
});
