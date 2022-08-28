import { useState, useEffect } from 'react'
import './App.css'
import {
  douyu, node, bili,
  getvideo
} from './api/index.js'
const mode = import.meta.env.mode
import { douyu as douyuStatic, bili as biliStatic } from '../list'
function App() {


  return (
    <div className="App">
      <Index />
    </div>
  )
}
const Index = () => {
  const [huyaarr, sethuya] = useState([])
  const [douyuarr, setdouyu] = useState([])
  const [biliarr, setbili] = useState([])

  const [liveArr, setArr] = useState([])
  const [net, setnet] = useState('')
  const fetch_bili = () => bili().finally(r => {
    const { data: { data: { result: {
      live_room
    } } } } =  mode == 'static' ? r : biliStatic
  

    const biliarr = live_room.map(({ uname, roomid, user_cover }) => ({
      roomSrc: 'https:' + user_cover,
      nickname: uname,
      rid: roomid
    }))
    setbili(biliarr)
    setArr(biliarr)
    setnet('bili')
  })
  const fetch_douyu = () => douyu().finally(r => {
    const { data: { list } } = mode == 'static' ? r : douyuStatic
    
    setdouyu(list)
    setArr(list)
    setnet('douyu')
  })
  const fetch_getLive = () => {
    getvideo().then(r => {
      console.log(r);
    })
  }

  const gotoLiveRoom = (url) => {
    const baseurl = {
      douyu: 'https://www.douyu.com/',
      bili: 'https://live.bilibili.com/'
    }[net]
    window.location.href = baseurl + url
  }




  return (<>
    <button onClick={fetch_douyu}>
      douyu
    </button>
    {/* <button onClick={fetch_getLive}>
      Live
    </button> */}
    <button
      onClick={fetch_bili}
    >
      bili
    </button>
    <div className='content' >
      {liveArr.map(({ roomSrc, nickname, rid }) => (
        <div className='item' key={rid} onClick={() => gotoLiveRoom(rid)}>
          <div>

            <img src={roomSrc} alt="" />
          </div>
          <div>
            {nickname}
          </div>
        </div>
      ))}
    </div>
  </>)
}
export default App
