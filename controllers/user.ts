import { BaseDependencies } from '../dependencies/base_dependencies.ts';
import { User } from '../types/user.ts';
import { RouterContext } from 'https://deno.land/x/oak/mod.ts';

export const get = async (context: RouterContext, deps: BaseDependencies) => {
  if (context.params.id) {
    return deps.userService.getById(context.params.id);
  }
  throw new Error('404');
};

export const getAll = async (
  context: RouterContext,
  deps: BaseDependencies
) => {
  return deps.userService.getAll();
};

export const post = async (context: RouterContext, deps: BaseDependencies) => {
  const { value } = await context.request.body();
  const body: Omit<User, '_id'> = {
    name: value.name
  };

  return deps.userService.insert(body);
};
