import { useState } from 'react';

const useCart = () => {
    const [show, setShow] = useState(true);
    const [cart, setCart] = useState([]);
    const handleClick = (item) => {
        if(cart.indexOf(item) !== -1)  return;
        setCart([...cart, item]);
    }
    return [cart, setCart, show, setShow, handleClick];
};

export default useCart;