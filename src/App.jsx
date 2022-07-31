import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

import {
  douyu, node, bili,
  getvideo
} from './api/index.js'

function App() {


  return (
    <div className="App">
      <Index />
    </div>
  )
}
const Index = () => {

  const fetch_bili = () => bili().then(r => {
    console.log(r);
  })
  const fetch_douyu = () => douyu().then(r => {
    console.log(r);
  })
  const fetch_getLive = () => {

    getvideo().then(r => {
      console.log(r);
    })
  }

  return (<>
    <button onClick={fetch_douyu}>
      douyu
    </button>
    <button onClick={fetch_getLive}>
      Live
    </button>
    <button
      onClick={fetch_bili}
    >
      bili
    </button>
  </>)
}
export default App
