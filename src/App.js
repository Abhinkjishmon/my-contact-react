import './App.css';
import Home from './pages/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Favourite from './pages/Favourite';
import NotFound from './pages/NotFound';
import Nav from './components/Nav';
import { useEffect, useState } from 'react';




function App() {
  const [contacts, setContacts] = useState([]);
  useEffect(() => {
    const getContacts = async () => {
      const contactsFormServer = await fetchContacts();
      setContacts(contactsFormServer);
    };
    getContacts();
  }, []);
  const formSub = async (data) => {
    const res = await fetch("http://localhost:3004/contacts", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const newdata = await res.json();
    // console.log(data);
    console.log(newdata);
    if (res.ok) {
      setContacts([...contacts, newdata]);
    }
  }
  const fetchContacts = async () => {
    const res = await fetch("http://localhost:3004/contacts");
    const data = await res.json();
    return data
  }
  const deleteContact = async (id) => {
    const res = await fetch(`http://localhost:3004/contacts/${id}`, {
      method: "DELETE",
    })
    if (res.status === 200) {
      let newContact = contacts.filter((singleContact) => {
        return singleContact.id !== id;
      });
      setContacts(newContact);
    }
  };

  //get single contact
  const getCon = async (id) => {
    const res = await fetch(`http://localhost:3004/contacts/${id}`);
    const data = await res.json();

    return data;
  }
  const favToggle = async (id) => {
    const singleCon = await getCon(id);
    const updTask = { ...singleCon, fav: !singleCon.fav };
    const res = await fetch(`http://localhost:3004/contacts/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updTask)
    })
    if (res.status === 200) {
      let updateContact = contacts.map((singleContact) => {
        return singleContact.id === id
          ? { ...singleContact, fav: !singleContact.fav }
          : singleContact;
      })
      setContacts(updateContact);
    }
  }
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path='/' element={<Home formSub={formSub} contacts={contacts} deleteContact={deleteContact} favToggle={favToggle} />} />
        <Route path='/favourite' element={<Favourite contacts={contacts} deleteContact={deleteContact} favToggle={favToggle} />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>

  );
}

export default App;
