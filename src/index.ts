import * as Koa from 'koa';
import * as logger from 'koa-logger';
import * as Router from 'koa-router';
import { Message } from './message';
import * as  Mockdb from './mockdb';

const app = new Koa();
const router = new Router();

router.get('/api/owner', (ctx, next) => {
    var msg = new Message()
    msg.data = Mockdb.Owners
    ctx.body = msg
});


router.get('/api/owner/:id', (ctx, next) => {
    const id: number = ctx.params['id'];
    const found = Mockdb.getOwnerById(id);

    var msg = new Message()
    msg.data = found
    ctx.body = msg
    console.log(msg);

});


app.use(logger());
app.use(router.routes());
app.use(router.allowedMethods());

const PORT = 8080
app.listen(PORT, () => {
    console.log(`mock server is listening to port ${PORT}`);
});
