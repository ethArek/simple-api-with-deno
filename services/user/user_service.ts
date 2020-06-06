import DbConnection from '../../db/mod.ts';
import { User } from '../../types/user.ts';
import { Collection } from '../../../../.cache/deno/deps/https/deno.land/345a2232771e7a1c430213b24b7faed795c75fd4ab8e0e407c71b25690bf6fdf.ts.ts.ts';

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
