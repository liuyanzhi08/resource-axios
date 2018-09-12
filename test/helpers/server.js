import Koa from 'koa';
import Router from 'koa-router';
import Body from 'koa-body';

let server;

function start() {
  const app = new Koa();
  const router = new Router();

  router.get('/api/book/1', (ctx) => {
    ctx.body = { id: 1 };
  });

  router.get('/api/book', (ctx) => {
    ctx.body = { items: [{ id: 1 }], total: 1 };
  });

  router.post('/api/book', (ctx) => {
    ctx.body = { id: 1 };
  });

  router.put('/api/book/1', (ctx) => {
    ctx.body = ctx.request.body;
  });

  router.delete('/api/book/1', (ctx) => {
    ctx.body = { id: 1 };
  });

  router.post('/api/book/1/order', (ctx) => {
    ctx.body = { id: 1 };
  });

  app
    .use(Body())
    .use(router.routes())
    .use(router.allowedMethods());

  server = app.listen(3000);
}

function stop() {
  server.close();
}

const base = 'http://localhost:3000/api/book';

export default {
  start,
  stop,
  base,
};
