import React from 'react'
import Contact from '../components/Contact'
import Form from '../components/Form'

const Home = () => {
    return (
        <div className='container my-5'>
            <div className="row justify-content-sm-center my-3">
                <Form />
                <Contact />
            </div>
        </div>
    )
}

export default Home