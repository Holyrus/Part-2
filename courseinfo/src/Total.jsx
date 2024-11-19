import React from 'react'

const Total = (props) => {

  console.log(props.parts);

  return (
    <div>
      <p>Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</p>
    </div>
  )
}

// exercises1={parts[0].exercises} exercises2={parts[1].exercises} exercises3={parts[2].exercises}

export default Total
