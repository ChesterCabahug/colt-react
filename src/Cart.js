import React from "react"


const Cart = ({initialItems}) => {
    return (
        <div>
            <h1>I AM CART</h1>
            <ul>
                {initialItems.map(item => (
                    <li>
                        Name: {item.name}
                    </li>
                ))}
            </ul>
            
        </div>
    )
}

export default Cart