import { MySqlConnection } from "./MySqlConnection";
import { QueryExecutor } from "./QueryExecutor";

export class MySqlQueryExecutor extends QueryExecutor {
  createConnection() {
    return new MySqlConnection();
  }
}