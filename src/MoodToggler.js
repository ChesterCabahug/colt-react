import React, { useState } from "react"


const MoodToggler = () => {
    const [isHappy, setIsHappy] = useState(true)
    const toggleIsHappy = () => setIsHappy(!isHappy)
    const style = {backgroundColor: isHappy ? "yellow" : "dodgerblue", textAlign: "center"}
    return <h3 style={style} onClick={toggleIsHappy}>{isHappy ? ":)" : ":("}</h3>
}
export default MoodToggler