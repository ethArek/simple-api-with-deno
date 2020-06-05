import db from "../db/mod.ts";
import { router } from "../lib/router.ts";

const API_URL = "/api/v1/users";

router.get(`${API_URL}`, async (context) => {
  context.response.body = {
    data: users,
  };
});

router.get(`${API_URL}/:userId`, async (context) => {
  const user = await db
    .collection("users")
    .findOne({ _id: context.params.userId });

  context.response.body = {
    data: user,
  };
});

router.post(`${API_URL}`, async (context) => {
  const body = {
    name: "name-" + Math.floor(Math.random() * 1000000),
  };

  const user = await db
    .collection("users")
    .insertOne(body);

  context.response.body = {
    data: user,
  };
});

export { router };
