import { useEffect, useState } from 'react';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';
import axios from 'axios';

const App = () => {

  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')

  useEffect(() => {
    console.log('Effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('Promise fulfilled')
        setPersons(response.data);
      })
  }, [])
  console.log('rendered', persons.length, 'persons')

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
      <h2>Phonebook</h2>

      <Filter filterValue={searchTerm} onChangeHandler={(e) => setSearchTerm(e.target.value)}/>
      
      <h2>Add a new</h2>

      <PersonForm onSubmitHandler={handleAddNumber} nameInputValue={newName} nameInputChange={handleInputChange} 
                  numberInputValue={newNumber} numberInputChange={handleNumberChange}
      />

      <h2>Numbers</h2>

      <Persons filteredPersonsArr={filteredPersons}/>

    </div>
  )
}

export default App
