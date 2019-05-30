
import constants from '../constants';

export class RequestUtils {
  public static complete(res: any) {
    if (res.success) {
      res = Object.assign({}, res, constants.success);
    } else {
      res = Object.assign({}, constants.error, res);
    }
    return res;
  }
}