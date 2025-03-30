import { useEffect } from "react"
import { useState } from "react"
import './App.css'

const App=()=>{
const Images=["teacher1.jpg","student2.jpg","student4.jpg","student5.jpg","student6.jpg"]
const [currentInd,setCurrentInd]=useState(0)

useEffect(()=>{
  const interval=setInterval(() => {
    setCurrentInd((pre)=>(pre+1)%Images.length)
  }, 1000);
  return()=> clearInterval(interval)

},[])
  return(
    <>
    <h1>App component ....</h1>
    <div className="img">
    <img src={Images[currentInd]} width="200" height="250" alt="deadpoll"/>
    </div>
   
    </>
  )
}
export default App