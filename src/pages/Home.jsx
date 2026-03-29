import React from 'react'
import {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import './Home.css'

export default function Home() {
let[input,setInput]=useState('')  
let navigate=useNavigate()
function HandleJoin()
{
  navigate(`/room/${input}`)
}
  return (
    <div className='home'>
      <input type="text" placeholder='Enter your room_Id' value={input} onChange={(e)=>setInput(e.target.value)} />
      <button onClick={HandleJoin}>Join Now</button>
    </div>
  )
}
