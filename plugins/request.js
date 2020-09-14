/**
 * 基于axios 封装的请求模块
 */
import axios from 'axios'
const baseUrl = 'https://conduit.productionready.io'
//  const baseUrl = 'http://realworld.api.fed.lagounews.com'
export const request  = axios.create({
  baseURL:baseUrl
})

// 通过插件机制获得上下文对象（query,params,req,res,app,store...）
// 插件导出函数必须作为default成员  export default
export default ({store}) => {
    // 请求拦截器
  // Add a request interceptor
  // 任何请求都要经过请求拦截器
  // 我们可以在请求拦截器中做一些公共的业务处理，例如统一设置Token
  request.interceptors.request.use( (config)=> {
    // 不同于客户端，这里面拿不到store中数据，所以要有插件重新写axios，不用这个文件的了，重写在plugins文件中
    const { user } = store.state
    if (user&&user.token) {
      config.headers['authorization'] = `Token ${user.token}`  // 让每个请求携带自定义token 请根据实际情况自行修改
    }
    return config;
  }, function (error) {
    // 如果请求失败（此时请求还没有发出去）就会进入这里
    return Promise.reject(error);
  });
  
  
  // 响应拦截器
  // Add a response interceptor
  request.interceptors.response.use( (response)=> {
    
    return response;
  }, function (error) {
    
    return Promise.reject(error);
  });
}