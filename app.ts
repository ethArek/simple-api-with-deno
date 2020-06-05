import { Application } from "https://deno.land/x/oak/mod.ts";
import { router as userRouter } from "./routes/user.ts";

const app = new Application();

app.use(userRouter.routes());
app.use(userRouter.allowedMethods());

app.addEventListener("listen", ({ port }) => {
  console.log(`Listening on: localhost:${port}`);
});

await app.listen({ port: 3000 });
