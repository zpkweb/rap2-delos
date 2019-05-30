import fetch from 'node-fetch';
import { RequestUtils } from '../utils/request';
import CrapApiService from '../../service/crapApi';
export default async function (params: any) {
  let target = `http://123.56.110.160:8181/front/interface/list.do?&interfaceName=&url=&moduleId=${params.moduleId}&password=${params.password}&visitCode=${params.code}&currentPage=${params.current}`;
  let json = await fetch(target).then(res => res.json()).then(res => RequestUtils.complete(res))
  return CrapApiService.modules(json);
}
