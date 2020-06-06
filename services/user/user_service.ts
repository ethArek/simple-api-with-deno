import DbConnection from '../../db/mod.ts';
import { User } from '../../types/user.ts';
import { Collection } from 'https://deno.land/x/mongo@v0.7.0/mod.ts';

export default class UserService {
  private usersCollection: Collection;

  constructor(dbConn: DbConnection) {
    this.usersCollection = dbConn.db.collection('users');
  }

  public async getAll() {
    return this.usersCollection.find();
  }

  public async getById(id: string) {
    return this.usersCollection.findOne({ _id: id });
  }

  public async insert(body: Omit<User, '_id'>) {
    return this.usersCollection.insertOne(body);
  }
}
