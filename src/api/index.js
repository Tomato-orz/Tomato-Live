
import axios from 'axios'

export const douyu = () => fetch('/api/room/list?page=1&type=DragonNest&pagesize=1000', {
}).then(r => r.json())

export const node = () => fetch('http://localhost:8888/dn').then(r => r.json())


//https://api.live.bilibili.com/xlive/web-interface/v1/second/getList?platform=web&parent_area_id=2&area_id=112&sort_type=sort_type_146&page=2                      
export const getvideo = () => fetch('/Live/xlive/web-interface/v1/second/getList?platform=web&parent_area_id=2&area_id=112&sort_type=sort_type_146&page=2', {

}).then(r => r.json())

export const bili = () => axios({
  url: '/x/web-interface/search/type',
  params: {
    page: 1,
    page_size: 42,
    keyword: '龙之谷',
    search_type: 'live',
  },
  // headers: {
  //   referer: 'https://www.bilibili.com/'
  // },
  proxy: {
    // '/bili': {
    //   target: 'https://api.bilibili.com/',
    //   changeOrigin: true,
    //   // secure:false
    //   rewrite: (path) => {
    //     // console.log(path);
    //     return path.replace(/^\/bili/, '')
    //   },
    //   headers: {
    //     referer: 'https://www.bilibili.com/'
    //   }
    // }
    // host:'https://api.bilibili.com',
    // port:'5173',
    // changeOrigin: true,
  }
})
