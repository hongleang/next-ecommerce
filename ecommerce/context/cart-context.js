import * as React from 'react'

const CartContext = React.createContext()

function cartReducer(state, action) {
    console.log('act', action)
    switch (action.type) {
        case 'add': {
            return { count: state.count + 1 }
        }
        case 'remove': {
            return { count: state.count - 1 }
        }
        default: {
            throw new Error(`Unhandled action type: ${action.type}`)
        }
    }
}

function CartProvider({ children }) {
    const [state, dispatch] = React.useReducer(cartReducer, { count: 0 })
    const value = { state, dispatch }
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

function useCart() {
    const context = React.useContext(CartContext)
    if (context === undefined) {
        throw new Error('useCount must be used within a CartProvider')
    }
    return context
}

export { CartProvider, useCart }