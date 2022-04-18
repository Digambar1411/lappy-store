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

  const incrementQuantity=(product)=>{
    setCart(cart.map(item=>item._id===product._id ? {...item,quantity:item.quantity+1} :item))
   
  }

  const decrementQuantity=(product)=>{
    setCart(cart.map(item=>item._id===product._id ? {...item,quantity:(item.quantity ? 1 : 0)} :item))

  }

    const moveToWishlist = (id) =>{
        const newData1=cart.filter(item=>item._id !== id)
        setCart(newData1);
    }

    return ( 
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, moveToWishlist, incrementQuantity, decrementQuantity}}>
            {children}
        </CartContext.Provider>

    )
}

export { useCart, CartProvider}