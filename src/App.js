import './App.css';
import Home from './pages/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Favourite from './pages/Favourite';
import NotFound from './pages/NotFound';
import Nav from './components/Nav';
import { useState } from 'react';



function App() {
  const [contacts,setContacts] = useState([]);
  const formSub = (data)=>{
    console.log(data);
    setContacts([...contacts, data]);
  }
  const deleteContact = (id)=>{
    let newContact = contacts.filter((singleContact)=>{
      return singleContact.id !== id;
    });
    setContacts(newContact);
  }
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path='/' element={<Home formSub={formSub} contacts={contacts} deleteContact={deleteContact}/>}/>
        <Route path='/favourite' element={<Favourite/>}/>
        <Route path='*' element={<NotFound />}/>
      </Routes>
    </Router>

  );
}

export default App;
