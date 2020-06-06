import { Application } from 'https://deno.land/x/oak/mod.ts';
import { router } from './router.ts';

const app = new Application();

app.use(router.routes());
app.use(router.allowedMethods());

app.addEventListener('listen', ({ port }) => {
  console.log(`Listening on: localhost:${port}`);
});

await app.listen({ port: 3000 });
