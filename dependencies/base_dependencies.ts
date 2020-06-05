import DbConnection from "../db/mod.ts";
import UserService from "../services/user/user_service.ts";

interface BaseDependencies {
  userService: UserService;
  dbConnection: DbConnection;
}

function getDependencies(): BaseDependencies {
  const dbConnection = new DbConnection();
  const userService = new UserService();

  return {
    userService,
    dbConnection,
  };
}

export { getDependencies };
