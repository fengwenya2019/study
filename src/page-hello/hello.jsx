import React,{useEffect} from 'react'
import {observer} from 'react-mobx'
import store from './store'

const Hello = observer(() => {
  const {isVisible} = store

  useEffect(()=>{
    console.log(isVisible)
  })
  
  return (
    <div>Hello,It's me.</div>
  )
})

export default Hello