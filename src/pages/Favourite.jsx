import React from 'react'
import Contact from '../components/Contact'

const Favourite = ({ contacts, deleteContact, favToggle }) => {
  return (
    <>
      <div className="container my-5">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-5">
          {contacts.map((singleContact)=>{
            return(
              singleContact.fav && (
                <Contact 
                  key={singleContact.id}
                  favToggle={favToggle}
                  deleteContact={deleteContact}
                  contact={singleContact}
                />
              )
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Favourite