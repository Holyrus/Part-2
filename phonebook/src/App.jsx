import { useState } from 'react';

const App = () => {

  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '12312415151', id: 1 },
    { name: 'Ada Lovelace', number: '123124122351', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')

  const handleAddNumber = (event) => {
    event.preventDefault();
    const newNameObject = {
      name: newName, number: newNumber, id:persons.length + 1
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

  const [searchTerm, setSearchTerm] = useState('');

  const filteredPersons = persons.filter(person =>
    person.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div>
      <div>debug: {newName}</div>
      <div>debug: {newNumber}</div>
      <h2>Phonebook</h2>
      <label>Filter shown with </label>
      <input value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
      <form onSubmit={handleAddNumber}>
        <h2>Add a new</h2>
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
      {filteredPersons.map((person) => (
        <p key={person.id}>{person.name} {person.number}</p>
      ))}
      {filteredPersons.length === 0 && (
        <p>No matches found</p>
      )}
    </div>
  )
}

export default App
