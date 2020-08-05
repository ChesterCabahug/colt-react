import React from "react"


const CartItem = ({id, name, price, qty}) => {
    return (
        <div className="CartItem">
            <div>{name}</div>
            <div>${price}</div>
            <div>{qty}</div>
            <div>Total: ${qty * price}</div>
        </div>
    )
}

export default CartItem