import React from 'react'
import { useLocation } from 'react-router-dom'

export default function QueryStringTest() {
  const location = useLocation();
  console.log(location);

  
  return (
    <div>s</div>
  )
}
