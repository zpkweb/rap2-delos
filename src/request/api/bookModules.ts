import fetch from 'node-fetch';
import BookService from '../../service/book';
export default async function (type: any) {
  let target = `http://123.56.110.160:8181/front/webPage/detail.do?id=${type}`;
  let json = await fetch(target).then(res => res.json())
  return BookService.modules(json);
}
