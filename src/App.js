import { useState } from "react";

import Header from  "./components/Header";
import Form from "./components/Form"

const App =()=> {

    /**
     * 
     * 
     * Create state for form; collect infromation that is needed; formData is an object
     */
    const [formData, setFormData] = useState({
        firstName:'',
        lastName: '',
        email: '',
        username: '',
        phone: '',
        password: '',
        dayClass: true,
        eveningClass: false,
        comments: ''
    })

    /**
     * 
     * 
     * handleChange function
     */
    const handleChange =(event)=> {
        const { name, value, type, checked } = event.target

        setFormData(prevState => {
            return {
                ...prevState,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }

    const handleSubmit =(event)=> {
        event.preventDefault()
        console.log(formData)
    }

    return ( 
        <>
            <Header username={formData.username}/>

        <Form
            firstName={formData.firstName}
            lastName={formData.lastName}
            email={formData.email}
            userName={formData.userName}
            phone={formData.phone}
            password={formData.password}
            dayClass={formData.dayClass}
            eveningClass={formData.eveningClass}
            comments={formData.comments}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            />
        </>
    )
} 
    

export default App