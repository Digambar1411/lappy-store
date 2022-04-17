import {createContext, useContext,useState} from "react";

const CartContext = createContext();

const useCart = () => useContext(CartContext);

const CartProvider = ({children}) => {

  const [cart, setCart] = useState([]);
 

  const addToCart =(product) =>{
     setCart(prevProd=>[...prevProd,product]) 
      
  }

  const removeFromCart =(id) =>{
    const newData=cart.filter(item=>item._id !== id)
    setCart(newData);
    
}
    return ( 
        <CartContext.Provider value={{ cart, addToCart, removeFromCart}}>
            {children}
        </CartContext.Provider>

    )
}

export { useCart, CartProvider}