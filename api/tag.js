import {request} from "@/plugins/request"

export const getTags = ()=>{
  return request.get('/api/tags')
}