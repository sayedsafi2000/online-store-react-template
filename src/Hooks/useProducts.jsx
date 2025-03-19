import  { useEffect, useState } from 'react';

const useProducts = () => {
    const [product, setProducts] = useState([]);

    useEffect(() => {
        fetch("/products.json")
            .then(res => res.json())
            .then(data => setProducts(data))

    }, []);
    console.log(product);
    return [product];
};

export default useProducts;