import React from 'react'

export default function Filter({filterData,category, setCategory}) {

  const fliterHandeler = (title) =>{
    setCategory(title);
  }
  

  return (
    <div className='Filter'>
      {
        filterData.map((data)=><button
        className={(category===data.title)? 'active' :''}
        key = {data.id}
        onClick={() =>fliterHandeler(data.title)}
        >{data.title}</button>)
      }
    </div>
  )
}
