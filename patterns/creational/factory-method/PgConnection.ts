import { Connection } from "./Connection";

export class PgConnection implements Connection{
  query(query: string): void {
    console.log(`Execute query '${query}' for Postgres`);
  }
}