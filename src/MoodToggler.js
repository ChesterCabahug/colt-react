import React, { useState } from "react"


const MoodToggler = () => {
    const [isHappy, setIsHappy] = useState(true)
    const toggleIsHappy = () => setIsHappy(!isHappy)
    return <h3 style={{backgroundColor: isHappy ? "yellow" : "dodgerblue"}} onClick={toggleIsHappy}>{isHappy ? ":)" : ":("}</h3>
}
export default MoodToggler