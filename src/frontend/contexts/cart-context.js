import {createContext, useContext,useState} from "react";
import { useNavigate } from "react-router-dom";
import { useAuth} from "./auth-context"

const CartContext = createContext();

const useCart = () => useContext(CartContext);

const CartProvider = ({children}) => {
  const { authState:{isLoggedIn}}= useAuth();
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);
 

  const addToCart =(product) =>{
    if(isLoggedIn){
      setCart(prevProd=>[...prevProd,product]) 
    }
    else{
      navigate("/login")
    }
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