import React, { useState } from 'react'


const Form = () => {
    const[name, setName] = useState("");
    const[Email, setEmail] = useState("");
    const[password, setpassword] = useState("");
    
const handleName = (e) => {
    console.log(e.target.value);
    setName(e.target.value);
}

const handleEmail = (e) => {
    console.log(e.target.value);
    setEmail(e.target.value);
}

const handlepassword = (e) => {
    console.log(e.target.value);
    setpassword(e.target.value);
}
const handleSubmit = (e) => {
    e.preventDefault();
}

return (
    <form onSubmit={handleSubmit}>
        <label>
            Name:
            <input type="text" value={name} onChange={handleName}/>
        </label>
        <br />
        <br />
        <label>
            Email:  
            <input type="Email" value={Email} onChange={handleEmail}/>
        </label>
        <br />
        <br />
        <label>
            Password:
            <input type="password" value={password} onChange={handlepassword}/>
        </label>
        <br />
        <button type='submit'>Submit</button>
    </form>
  )
}
export default Form;