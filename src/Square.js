import React from 'react'


const Square =({value , onClick})=>{
  return(
<button style={{height:'40px',width:'40px'}} className='Square' onClick={onClick}>{value}</button>
  )
}

export default Square