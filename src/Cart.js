import React from "react"
import CartItem from "./CartItem"


const Cart = ({initialItems}) => {
    return (
        <div className="Cart">
            <h1>I AM CART</h1>
            <div className="Cart-items"></div>
            {initialItems.map(item => (
                    <CartItem key={item.id} {...item}/>
                ))}    
            
            
            
        </div>
    )
}

export default Cart