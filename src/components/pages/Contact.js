import { useState } from "react";

export default function Contact () {
    const [name, setName] = useState()
    const [email, setEmail] = useState()

    return (
        <>
        <h1>Contact</h1>
        <form>
            <input name='name' placeholder="Name" type='text'></input>
            <input name='email' placeholder="Email" type='email'></input>
        </form>
        </>
    )
}