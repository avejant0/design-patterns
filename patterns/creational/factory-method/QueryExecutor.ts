import { Connection } from "./Connection";

export abstract class QueryExecutor {
  public execute(query: string) {
    const connection = this.createConnection();
    connection.query(query);
  }

  abstract createConnection(): Connection;
}