

const Persons = (props) => {
  return (
    <div>
      {props.filteredPersonsArr.map((person) => (
        <p key={person.id}>{person.name} {person.number}</p>
      ))}
      {props.filteredPersonsArr.length === 0 && (
        <p>No matches found</p>
      )}
    </div>
  )
}

export default Persons
