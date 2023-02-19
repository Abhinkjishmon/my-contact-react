import React from 'react'
import Contact from '../components/Contact'
import Form from '../components/Form'

const Home = ({ formSub, contacts, deleteContact, favToggle }) => {
    console.log('contacts', contacts);
    return (
        <div className='container my-5'>
            <div className="row justify-content-sm-center my-3">
                <Form formSub={formSub} />
            </div>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-5">
                {contacts.map((singleContact) => {
                    return <Contact key={singleContact.id} contact={singleContact} deleteContact={deleteContact} favToggle={favToggle}/>
                })}
            </div>
        </div>
    )
}

export default Home