import { MongoClient, Database } from "https://deno.land/x/mongo@v0.7.0/mod.ts";

class DbConnection {
  public db: Database;

  constructor() {
    const client = new MongoClient();
    client.connectWithUri("mongodb://localhost:27017");

    this.db = client.database("test");
  }
}

export default DbConnection;
