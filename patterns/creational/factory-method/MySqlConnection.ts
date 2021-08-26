import { Connection } from "./Connection";

export class MySqlConnection implements Connection{
  query(query: string): void {
     console.log(`Query '${query}' was executed for MySQL`);
  }
}