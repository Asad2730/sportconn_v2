'use client'

import { useState } from "react"
import SignIn from "./signin"
import SignUp from "./signup"



export default function RenderAuth() {
    const [render,setRender] = useState(true)
    const  handleRender = () => setRender(!render)

  return (
    <>
       {render?<SignIn onPress={handleRender} />:<SignUp onPress={handleRender}/>}
    </>
  )
}
