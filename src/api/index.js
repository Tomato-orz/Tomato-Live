
import axios from 'axios'

export const douyu = () => fetch('/api/room/list?page=1&type=DragonNest&pagesize=1000', {
}).then(r => r.json())

export const node = () => fetch('http://localhost:8888/dn').then(r => r.json())


//https://api.bilibili.com/x/web-interface/search/type?page=1&page_size=42&keyword=%E9%BE%99%E4%B9%8B%E8%B0%B7&search_type=live                    
export const getvideo = () => fetch('/Live/xlive/web-interface/v1/second/getList?platform=web&parent_area_id=2&area_id=112&sort_type=sort_type_146&page=2', {

}).then(r => r.json())

export const bili = () => axios({
  url: '/search/x/web-interface/search/type',
  params: {
    page: 1,
    page_size: 50,
    keyword: '龙之谷',
    search_type: 'live',
  },
  proxy: {

  }
})

