import * as _ from 'lodash'

export default class CrapApiService {
  public static menu(res: any) {
    res.data = _.find(res.data.menuList, (item: any) => {
      if (item.menu.id === "1b35d3a5-57fc-4fc7-b458-918523c33042") {
        _.forEach(item.subMenu, (ele) => {
          ele.modulesId = ele.menuUrl.split('/')[4];
        })
        return item;
      }
    })
    return res;
  }
  public static modules(res: any) {
    if (res.data) {
      res.data = res.data.modules;
    }
    return res;
  }
  public static interfaces(res: any) {
    if (res.data) {
      res.data = res.data.interfaces;
    }
    return res;
  }
  public static detail(res: any) {
    return res;
  }
}