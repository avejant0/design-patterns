import { PgConnection } from "./PgConnection";
import { QueryExecutor } from "./QueryExecutor";

export class PgQueryExecutor extends QueryExecutor {
  createConnection() {
    return new PgConnection();
  }
}