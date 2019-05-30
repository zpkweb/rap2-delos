import router from './router'
import { BookModules, BookList, BookDetail } from '../request'

router.get('/book/modules', async(ctx) => {
  ctx.body = await BookModules(ctx.query.type);
})

router.get('/book/list', async(ctx) => {
  console.log(ctx.query)
  ctx.body = await BookList(ctx.query);
})

router.get('/book/detail', async(ctx) => {
  ctx.body = await BookDetail(ctx.query.id);
})