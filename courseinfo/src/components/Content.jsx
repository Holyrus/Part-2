import React from 'react'
import Part from './Part'

const Content = ({ parts }) => {

  console.log(parts);

  return (
    <div>
      {parts.map((item) => (
        <Part key={item.id} part={item.name} exercises={item.exercises}/>
      ))}
    </div>
  )
}

export default Content
