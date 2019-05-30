import axios from 'axios';
import { RequestUtils } from '../utils/request';
import BookService from '../../service/book';

export default async function (id: any) {
  let target = `http://123.56.110.160:8181/front/webPage/detail.do?id=${id}&password=&visitCode=&`;
  let json = await axios.get(target).then((res) => {
    return res.data;
  }).then(res => RequestUtils.complete(res));
  return BookService.detail(json);
}
