import DbConnection from "../../db/mod.ts";
import { User } from "../../types/user.ts";

export default class UserService {
  private dbConn!: DbConnection;

  constructur(dbConn: DbConnection) {
    this.dbConn = dbConn;
  }

  public async getAll() {
    const users = await this.dbConn.db
      .collection("users")
      .find();
  }

  public async getById(id: string) {
    const user = await this.dbConn.db
      .collection("users")
      .findOne({ _id: id });
  }

  public async insert(body: Omit<User, "_id">) {
    const user = await this.dbConn.db
      .collection("users")
      .insertOne(body);

    return user;
  }
}
