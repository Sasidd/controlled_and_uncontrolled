import { useContext } from 'react'
import React from 'react'
import { EditerContext } from '../AppContext'

export default function Card() {
const {name , setName , age , setAge} = useContext(EditerContext)

  return (
    <div>
        <h1>Name = {name}</h1>
    <h2>Age = {age}</h2>
    {/* <button onClick={handleCards}>Change it </button> */}
    </div>
  )
}
