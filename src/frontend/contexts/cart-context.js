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

    const moveToWishlist = (id) =>{
        const newData1=cart.filter(item=>item._id !== id)
        setCart(newData1);
    }

    return ( 
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, moveToWishlist}}>
            {children}
        </CartContext.Provider>

    )
}

export { useCart, CartProvider}