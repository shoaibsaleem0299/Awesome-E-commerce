import { createContext, useContext, useEffect, useState } from "react";

const productContext = createContext(); // Create the context

// Hook to use the product context
export const useProductContext = () => useContext(productContext);

// Context provider component
export const ProductContextProvider = ({ children }) => {
    const [products, setProducts] = useState([]); // Initialize products with an empty array

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch("https://dummyjson.com/products");
                const data = await response.json();
                setProducts(data.products); // Update the state with the fetched products
            } catch (e) {
                console.error("Error while fetching products: ", e);
            }
        };
        fetchProducts();
    }, []);

    return (
        <productContext.Provider value={{ products }}>
            {children}
        </productContext.Provider>
    );
};
