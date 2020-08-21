import Vue from 'vue'
import dayjs from 'dayjs'

Vue.filter('date',(value,format='YYYY-MM-DD HH:mm')=>{
  return dayjs(value).format(format)
})