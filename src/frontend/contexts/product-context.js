import { createContext, useContext, useEffect, useState} from "react";
import axios from "axios";

const ProductContext = createContext(null);

const useProduct = ()=>useContext(ProductContext);

const ProductProvider = ({children})=>{

    const [products, setProducts] = useState([]);

        const getProducts = async()=>{
            const response = await axios.get("/api/products");
            setProducts(response.data.products);
        }
   
    useEffect(()=>{
        getProducts();
    },[]);

    return(<ProductContext.Provider value={{products}}>
        {children}
        </ProductContext.Provider>)
}

export {ProductProvider,useProduct}