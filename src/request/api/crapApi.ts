import fetch from 'node-fetch';
import { RequestUtils } from '../utils/request';
import CrapApiService from '../../service/crapApi';

export default async function () {
  let target = `http://123.56.110.160:8181/front/init.do`;
  let json = await fetch(target).then(res => res.json()).then(res => RequestUtils.complete(res))
  return CrapApiService.menu(json);
}
