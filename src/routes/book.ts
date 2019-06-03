import router from './router'
import Pagination from './utils/pagination'
import { BookModules, BookList, BookDetail } from '../request'

router.get('/book/modules', async(ctx) => {
  ctx.body = await BookModules(ctx.query.type);
})

router.get('/book/list', async(ctx) => {
  let bookList = await BookList(ctx.query);
  const pagination = new Pagination(bookList.page.allRow, ctx.query.currentPage || 1, ctx.query.limit || 15)
  bookList.page = pagination;
  ctx.body = bookList;
})

router.get('/book/detail', async(ctx) => {
  ctx.body = await BookDetail(ctx.query.id);
})