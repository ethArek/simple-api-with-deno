import DbConnection from '../db/mod.ts';
import UserService from '../services/user/user_service.ts';

export interface BaseDependencies {
  userService: UserService;
}

export function getBaseDependencies(): BaseDependencies {
  const dbConnection = new DbConnection();
  const userService = new UserService(dbConnection);

  return {
    userService
  };
}
