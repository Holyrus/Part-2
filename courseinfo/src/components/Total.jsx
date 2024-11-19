import React from 'react'

const Total = ({ parts }) => {

  const totalExercises = parts.reduce((sum, part) => sum + part.exercises, 0);
  console.log(totalExercises);

  return (
    <div>
      <h4>Total of {totalExercises} exercises</h4>
    </div>
  )
}

export default Total
