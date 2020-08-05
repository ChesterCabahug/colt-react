import React from "react"

function Greeter(props) {
return (   
    <> 
    <h1>Hi there, {props.name}</h1>
    <p>I know that you are {props.age} years old</p>
    </>
) 
}

export default Greeter