import { MySqlQueryExecutor, PgQueryExecutor } from "../../patterns/creational";

describe('Factory Method', () => {
  it('should create connections of correct types', async () => {
    const jestSpy = jest.spyOn(console, 'log');
    const pgExecutor = new PgQueryExecutor();
    const mySqlExecutor = new MySqlQueryExecutor();
    
    pgExecutor.execute('test 1');
    mySqlExecutor.execute('test 2');

    expect(jestSpy).toHaveBeenCalledTimes(2);
    expect(jestSpy.mock.calls[0]).toEqual(['Execute query \'test 1\' for Postgres']);
    expect(jestSpy.mock.calls[1]).toEqual(['Query \'test 2\' was executed for MySQL']);
  });
});