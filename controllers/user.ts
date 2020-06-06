import { BaseDependencies } from '../dependencies/base_dependencies.ts';

export const get = (deps: BaseDependencies) => {
  return deps.userService.getById();
};
