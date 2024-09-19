import { createContext, useEffect, useState } from "react";

const productContext = createContext();

export const useProductContext = () => useContext(productContext);

export const productContextProvider = ({childern}) => {

    const [products, setProducts] = useState({products : []});

    useEffect(()=>{
        const fetchProducts = async () => {
            try { 
                const response = await fetch("https://dummyjson.com/products");
                const data = await response.json();
                setProducts(data);
            }catch (e) {
                console.error("Error while fatching product : ", e);
            }
        }
        fetchProducts();
    },[]);

    return (
        <productContext.Provider value={{products}}>
            {childern}
        </productContext.Provider>
    );

}
