import React from 'react'

  const Display = (props) => {
  const {boxes}=props
  // box =>div style = {{}}
  // fixed b style
  //array.map((box,index))
  return (
    <div >
      {
        boxes.map((item,index)=>
        <div key={index} 
            style={{
              width:'200px',
              height :'200px',
              backgroundColor :item.box_color,
              display:'inline-block',
              margin:'15px'
            }}>
          
        {item.box_colour}</div>
        )
      }
    </div>
  )
}
export default Display;

