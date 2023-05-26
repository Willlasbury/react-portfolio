import { useState } from "react";

export default function Contact () {
    const [name, setName] = useState()
    const [email, setEmail] = useState()

    function handleChangeName (event) {
        setName(event.target.value)
    }
    
    function handleChangeEmail (event) {
        setEmail(event.target.value)
    }

    function handleSubmit (event) {
        event.preventDefault()
        if (!email.match(/^(.*)@(.*)\.(.*)/)){
            alert('email not valid')
        }
        setEmail('')
        setName('')
    }

    return (
        <section className="flex flex-col items-center p-3 h-full ">
        <h1 className="flex place-content-center m-3 w-1/2 text-3xl font-semibold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] ">Contact</h1>
        <form className="flex flex-col items-center p-5 border-2 border-gray-700 rounded-lg shadow-sm" onSubmit={handleSubmit}>
        
            <input name='name' placeholder="Name" type='text' value={name} onChange={handleChangeName} 
            className="m-3 border-2 border-gray-700 rounded-sm" />
            <input name='email' placeholder="Email" type='email' value={email} onChange={handleChangeEmail} 
            className="m-3 border-2 border-gray-700 rounded-sm" />
          
            <button className="mt-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded" onClick={handleSubmit
            }>Submit</button>
        </form>
        </section>
    )
}