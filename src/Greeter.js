import React from "react"

function Greeter({name, age=16, excitement = 1}) {
    const greet = () => {
        alert(`Hello there, ${name}`)
    }
    return (   
        <> 
        <h1>Hi there, {name}{"!".repeat(excitement)}</h1>
        <p>I know that you are {age} years old</p>
        <button onClick={() => alert("hello!")}>Click Me!</button>
        <button onClick={greet}>Click Me, I'm better</button>
        </>
    ) 
}

export default Greeter