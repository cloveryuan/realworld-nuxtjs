/**
 * nuxt中本地存储，要考虑到客户端 服务端都能够拿到这份本地存储数据
 */
// 服务端渲染期间，运行的都是同一个实例
// 防止数据冲突，务必要把state定义成一个函数，返回数据对象
export const state = ()=>{
  return {
    user:null
  }
}

export const mutations = {
  setUser(state,data){
    state.user = data
  }
}

// 服务端读取cookie的包cookieparser
const cookieparser = process.server?require('cookieparser'):undefined
// 数据持久化，刷新后服务端还能拿到数据
export const actions = {
   /**
    nuxtServerInit是一个特殊的action方法只会在服务端运行，
    这个方法会在服务端渲染期间自动调用，作用是初始化容器数据，
    传递数据给客户端使用
  */ 
 nuxtServerInit({commit},{req}){
  let user = null
  if(req.headers.cookie){
    // 使用Cookieparser把cookie字符串转化为JavaScript对象
    const parsed = cookieparser.parse(req.headers.cookie)
    try{
      user = JSON.parse(parsed.user)
      // console.log(user)
    }catch(err){
      // No valid cookie found
    }
    // 提交mutation，修改状态
    commit('setUser',user)
  }
 }
}