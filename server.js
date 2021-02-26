const koaStatic = require("koa-static");
const Koa = require("koa");
const koaLogger = require("koa-logger");

const app = new Koa();
app.use(koaLogger());
app.use(koaStatic("src"));
const port = process.env.PORT || 3000;
app.listen(port);
console.info(`server listen on port: ${port}`);