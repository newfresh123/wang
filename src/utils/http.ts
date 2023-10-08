import axios, {
  type AxiosRequestHeaders,
  type AxiosResponse,
  type InternalAxiosRequestConfig
} from 'axios'
//const data = JSON.parse(localStorage.getItem('user') || '{}');
// console.log(data.token);

const service = axios.create({
  baseURL: import.meta.VITE_BASE_URL,
  timeout: 10000
})
// 添加请求拦截器 前端给后端发送数据【没有到后端】
service.interceptors.request.use(
  function (config: InternalAxiosRequestConfig<any>) {
    // 在发送请求之前做些什么
    config.headers = {
      'X-Requested-With': 'XMLHttpRequest',
      'Content-Type': 'application/json'
    } as unknown as AxiosRequestHeaders

    return config
  },
  function (error: any) {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)

// 添加响应拦截器 后端给前端返回数据【后端到前端了】
service.interceptors.response.use(
  function (response: AxiosResponse<any, any>) {
    // 对响应数据做点什么

    return response.data
  },
  function (error: any) {
    // 对响应错误做点什么
    if (error && error.response) {
      switch (error.response.status) {
        case 401:
          console.log(error.response.data.message)
          break
        case 403:
          console.log(error.response.data.message)
          break
        case 404:
          console.log(error.response.data.message)
          break
        case 500:
          console.log(error.response.data.message)
          break
        default:
          console.log(error.response.data.message)
          break
      }
    } else {
      if (JSON.stringify(error).includes('timeout')) {
        console.log('请求超时')
      }
      error.message = '连接服务器失败'
    }

    //通知message

    return Promise.reject(error.response)
  }
)
export default service
