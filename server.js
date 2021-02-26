const koaStatic = require("koa-static");
const Koa = require("koa");
const koaLogger = require("koa-logger");
const koaMount = require("koa-mount");
const jsonfile = require("jsonfile");
const bodyParser = require("koa-bodyparser");

const app = new Koa();
app.use(koaLogger());
app.use(bodyParser());

app.use(koaMount("/mock/actions/getcsrftoken/", async function (ctx, next){
	ctx.set("X-CSRF-Token","123");
	ctx.body = "";
}));

app.use(koaMount("/mock/changes", async function (ctx, next){
	console.dir(ctx.request.body, { depth: null });
	ctx.body = {};
}));

app.use(koaStatic("src"));


const port = process.env.PORT || 3000;
app.listen(port);
console.info(`server listen on port: ${port}`);