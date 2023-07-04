
import { useState } from 'react'
import './App.css'
import ContactList from './assets/components/ContactList'
import SelectedContact from './assets/components/SelectedContact';


 function App() {
  const [selectedContactId, setSelectedContactId] = useState(null);
  
  return (
    <>
    {selectedContactId ? (
      <SelectedContact
      selectedContactId={selectedContactId}
      setSelectedContactId={setSelectedContactId}/>
    ) : (
      <ContactList 
      setSelectedContactId={setSelectedContactId}/>
    )}
    </>
  )
}

export default App