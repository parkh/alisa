'use strict';

const Koa = require('koa');
const app = new Koa();

// response
app.use(ctx => {
  ctx.body = 'Hello Alisa';
});

app.listen(8888);
