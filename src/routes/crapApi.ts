import router from './router'
import { CrapApi, CrapApiModules, CrapApiInterfaces, CrapApiDetail } from '../request'

router.get('/crapapi', async(ctx) => {
  ctx.body = await CrapApi();
})

router.get('/crapapi/modules', async(ctx) => {
  ctx.body = await CrapApiModules(ctx.query);
})

router.get('/crapapi/interfaces', async(ctx) => {
  ctx.body = await CrapApiInterfaces(ctx.query);
})

router.get('/crapapi/detail', async(ctx) => {
  ctx.body = await CrapApiDetail(ctx.query.id);
})