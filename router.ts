import { baseDependencies } from './dependencies/base_dependencies.ts';
import * as userController from './controllers/user.ts';
import { Router, RouterContext } from 'https://deno.land/x/oak/mod.ts';

const router = new Router();

router.get(`/api/v1/users`, async (context: RouterContext) => {
  context.response.body = {
    data: await userController.getAll(context, baseDependencies)
  };
});

router.get(`/api/v1/users/:userId`, async (context: RouterContext) => {
  context.response.body = {
    data: await userController.get(context, baseDependencies)
  };
});

router.post(`/api/v1/users`, async (context: RouterContext) => {
  context.response.body = {
    data: await userController.post(context, baseDependencies)
  };
});

export { router };
