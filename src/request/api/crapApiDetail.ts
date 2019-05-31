import axios from 'axios';
import { RequestUtils } from '../utils/request';
import CrapApiService from '../../service/crapApi';
export default async function (params: any) {
  let target = `http://123.56.110.160:8181/front/interface/detail.do?id=${params.id}&password=${params.password}&visitCode=${params.code}`;
  target = `http://123.56.110.160:8181/front/interface/detail.do?&id=579ead79-4ff3-4b74-b70c-676db4618be4&password=www.zbgedu.com&visitCode=2989`;
  let json = await axios.get( target ).then(res => res.data).then(res => RequestUtils.complete(res))
  return CrapApiService.detail(json);
}
