import RequestConfig from '../request/config'

export default class BookService {
  public static modules(modulesJson: any): Promise<boolean> {
    if (modulesJson.data) {
      RequestConfig.success.data = Object.assign(RequestConfig.success.data, {
        brief: modulesJson.data.brief,
        content: modulesJson.data.content,
        category: modulesJson.others.category,
        categorys: modulesJson.others.categorys
      });
      return RequestConfig.success;
    } else {
      if (modulesJson.error.message) {
        RequestConfig.error.msg = modulesJson.error.message;
      }
      return RequestConfig.error;
    }
  }
  public static list(listJson: any): Promise<boolean> {
    if (listJson.data) {
      RequestConfig.success.data = Object.assign(RequestConfig.success.data, {
        category: listJson.others.category,
        categorys: listJson.others.categorys,
        list: listJson.data,
        page: listJson.page
      })
      return RequestConfig.success;
    } else {
      if (listJson.error.message) {
        RequestConfig.error.msg = listJson.error.message;
      }
      return RequestConfig.error;
    }
  }
  public static detail(detailJson: any): Promise<boolean> {
    if (detailJson.data) {
      RequestConfig.success.data = Object.assign(RequestConfig.success.data, {
        category: detailJson.others.category,
        categorys: detailJson.others.categorys,
        detail: detailJson.data
      })
      return RequestConfig.success;
    } else {
      if (detailJson.error.message) {
        RequestConfig.error.msg = detailJson.error.message;
      }
      return RequestConfig.error;
    }
  }
}