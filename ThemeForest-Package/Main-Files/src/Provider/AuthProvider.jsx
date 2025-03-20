import { createContext, useState, useEffect } from "react";
import PropTypes from 'prop-types'; // ES6
import useProducts from "../Hooks/useProducts";
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);
    const [totalQuantity, setTotalQuantity] = useState(0);
    const [product, loading, error] = useProducts();

    useEffect(() => {
        // Calculate total price and total quantity whenever cart changes
        const newTotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
        const newTotalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);
        setTotal(newTotal);
        setTotalQuantity(newTotalQuantity);
    }, [cart]);

    const handleClick = (item) => {
        const existingItem = cart.find(cartItem => cartItem._id === item._id);
        if (existingItem) {
            return;
        }
        const updatedItem = {...item, quantity: 1};
        setCart([...cart, updatedItem]);
    }

    const handleInc = (itemId) => {
        setCart(cart.map(item => 
            item._id === itemId 
            ? { ...item, quantity: item.quantity + 1 } 
            : item
        ));
    }

    const handleDec = (itemId) => {
        setCart(cart.map(item => 
            item._id === itemId 
            ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : item.quantity }
            : item
        ));
    }

    const contextData = {
        cart,
        setCart,
        total,
        totalQuantity,
        handleClick,
        handleInc,
        handleDec,
        product,
        loading,
        error
    }

    return (
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
AuthProvider.propTypes = {
    children: PropTypes.node
}
