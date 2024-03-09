import { useState } from 'react'
import './App.css'
import Header from './component/header'
import Banner from './component/Banner'
import Content from './component/content'
function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className="homepage">
        <Header />
        <Banner />
        <Content />
      </div>
    </>
  )
}

export default App
