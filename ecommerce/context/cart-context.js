import React, { useState, useCallback } from 'react'

const CartContext = React.createContext()

function CartProvider({ children }) {
    const [showCart, setShowCart] = useState(false);
    const [cartItems, setCartItems] = useState([]);

    const onAddToCart = useCallback((prodcut, quantities) => {
        const cartIndex = cartItems.findIndex(ct => ct._id === prodcut._id)
        const newCart = [...cartItems];
        if (cartIndex >= 0) {
            newCart[cartIndex].totalQuantities = newCart[cartIndex].totalQuantities + quantities;
            newCart[cartIndex].totalPrice = newCart[cartIndex].totalPrice + (newCart[cartIndex].totalQuantities * prodcut.price)
            setCartItems(newCart);
        } else {
            const newItem = Object.assign(prodcut, {});
            newItem.totalPrice = newItem.price * quantities;
            newItem.totalQuantities = quantities
            setCartItems([...cartItems, newItem])
        }
    }, [cartItems]);

    const onRemoveCart = (prodcut) => {
        const newCart = [...cartItems].filter(item => item._id !== prodcut._id);
        setCartItems(newCart);
    }

    const clearCart = () => {
        setCartItems([]);
    }

    return <CartContext.Provider
        value={{
            showCart,
            cartItems,
            onAddToCart,
            onRemoveCart,
            clearCart
        }}>
        {children}
    </CartContext.Provider>
}

function useCart() {
    const context = React.useContext(CartContext)
    if (context === undefined) {
        throw new Error('useCount must be used within a CartProvider')
    }
    return context
}

export { CartProvider, useCart }