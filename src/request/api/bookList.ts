import axios from 'axios';
const querystring = require('querystring');
import BookService from '../../service/book';

export default async function (params: any) {
  let target = `http://123.56.110.160:8181/front/webPage/list.do`;
  let json = await axios.post(target, querystring.stringify(params)).then((res) => {
    return res.data;
  });
  return BookService.list(json);
}
