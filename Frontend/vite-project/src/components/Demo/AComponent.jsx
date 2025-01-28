import { useState } from "react"
import BComponent from "./bComponent";

const AComponent = () => {

  const [data,setData] = useState("Sam-Component A");

  const handleState = (sdfvgfergr) => {
    setData(sdfvgfergr)
  }
  
  return (
    <>
      <p>Component A - {data}</p>
      <BComponent name={data} data={handleState}/>
    </>
  )
}

export default AComponent