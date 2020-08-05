import React from "react"

function Greeter({name, age=16, excitement = 1}) {
return (   
    <> 
    <h1>Hi there, {name}{"!".repeat(excitement)}</h1>
    <p>I know that you are {age} years old</p>
    </>
) 
}

export default Greeter