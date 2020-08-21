import {request} from "@/plugins/request"

// 获取用户信息
export const getProfiles = (username) => {
  return request({
    method: 'GET',
    url: `/api/profiles/${username}`,
  })
}