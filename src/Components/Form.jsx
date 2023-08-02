import React, { useContext, useState } from 'react'
import { EditerContext } from '../AppContext'

export default function Form() {
    const {name , setName , age , setAge} = useContext(EditerContext)
    const [txt,setTxt]=useState('')
    const[num,setNum]=useState('')
    // const handleClk=(e)=>{
    //   e.preventDefault()
    //   console.log('text => '+txt);
    //   console.log('Number => '+num);
    // }
    const handleChange=(e)=>{
      setTxt(e.target.value)
     setName(e.target.value)
    }
    const handleChange2=(e)=>{
      setNum(e.target.value)
      //console.log(e.target.value);
      setAge(e.target.value)
    }
  return (
    <>
   <form action="">
    <input type="text" value={txt} onChange={(e)=>{handleChange(e)}}/>
    <input type="number" value={num} onChange={(e)=>{handleChange2(e)}}/>
   </form>
    </>
  )
}
