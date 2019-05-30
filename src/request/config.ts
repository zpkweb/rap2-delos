 let RequestConfig: any =  {
  success: {
    "state": "success", // 数据处理成功或者失败
    "data": {},    // 接口返回数据
    "msg": "成功"   //  接口说明信息
  },
  error: {
    "state": "error", // 数据处理成功或者失败
    "data": {},    // 接口返回数据
    "msg": "失败"   //  接口说明信息
  }
}
export default RequestConfig