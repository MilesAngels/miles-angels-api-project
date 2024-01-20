import {useState, useEffect} from "react"
import Greeting from './components/Greeting'
import NewFetch from './components/NewFetch'
import Time from './components/Time'
import './App.css'


function App() {
  const [date, setDate] = useState(new Date())

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date());
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <>
      <Greeting />
      {/* <NewFetch/> */}
      <Time date={date}/>
    </>
  )
}

export default App
