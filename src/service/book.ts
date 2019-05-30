export default class BookService {
  public static modules(res: any) {
    res.data = {
      brief: res.data.brief,
      content: res.data.content,
      category: res.others.category,
      categorys: res.others.categorys
    }
    return res;
  }
  public static list(res: any) {
    res.data = {
      category: res.others.category,
      categorys: res.others.categorys,
      list: res.data,
      page: res.page
    }
    return res;
  }
  public static detail(res: any) {
    res.data = {
      category: res.others.category,
      categorys: res.others.categorys,
      detail: res.data
    }
    return res;
  }
}