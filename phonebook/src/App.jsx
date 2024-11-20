import { useState } from 'react';

const App = () => {

  const [persons, setPersons] = useState([
    { name: 'Arto Hellas',
      number: '12312415151',
    },
    { name: 'Ada Lovelace',
      number: '123124122351',
    },
  ])
  const [newName, setNewName] = useState('')

  const handleAddNumber = (event) => {
    event.preventDefault();
    const newNameObject = {
      name: newName,
      number: newNumber,
    }
    if (newName !== '' && newNumber !== '' && !persons.some(person => person.name === newName)) {
    setPersons(persons.concat(newNameObject));
    setNewName('');
    setNewNumber('');
    } else if (newName === '' || newNumber === '') {
      alert('Input field is empty');
    } else {
      alert(`${newName} is already added to phonebook`);
    }
  }

  const handleInputChange = (event) => {
    setNewName(event.target.value);
    console.log(event.target.value);
  }

  const [newNumber, setNewNumber] = useState('');

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  }

  return (
    <div>
      <div>debug: {newName}</div>
      <div>debug: {newNumber}</div>
      <h2>Phonebook</h2>
      <form onSubmit={handleAddNumber}>
        <div>
          name: <input value={newName} onChange={handleInputChange} />
        </div>
        <div>
          number: <input type='number' value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type='submit'>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person) => (
        <p key={person.name}>{person.name} {person.number}</p>
      ))}
    </div>
  )
}

export default App
