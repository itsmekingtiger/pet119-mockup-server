import * as Koa from 'koa';
import * as logger from 'koa-logger';
import * as Router from 'koa-router';
import * as BodyParser from 'koa-bodyparser';
import { Message, Owner } from './message';
import * as  Mockdb from './mockdb';

const app = new Koa();
const router = new Router();

router.get('/api/owner', (ctx, next) => {
    const {name} = ctx.request.query;
    console.log(`name: ${name}`);
    
    var msg = new Message();
    msg.data = Mockdb.getOwners(name);
    ctx.body = msg;

    console.log(msg);
});


router.get('/api/owner/:id', (ctx, next) => {
    const id: number = ctx.params['id'];
    const found = Mockdb.getOwnerById(id);

    var msg = new Message();
    msg.data = found;
    ctx.body = msg;

    console.log(msg);
});

router.post('/api/owner', (ctx, next) => {
    console.log(ctx.request.body);
});


router.post('/api/dog', (ctx, next) => {
    console.log(ctx.request.body);
});



app.use(logger());
app.use(BodyParser());
app.use(router.routes());
app.use(router.allowedMethods());

const PORT = 8080
app.listen(PORT, () => {
    console.log(`mock server is listening to port ${PORT}`);
});
