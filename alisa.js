'use strict';

const Koa = require('koa');
const app = new Koa();

// x-response-time

app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  ctx.set('X-Resonse-Time', `${ms}ms`);
});

// logger

app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  console.log(`${ctx.method}: ${ctx.url} - ${ms}ms`)
});

// response
app.use(async ctx => {
  ctx.body = 'Hello you';
});

if (!module.parent) app.listen(8888);
