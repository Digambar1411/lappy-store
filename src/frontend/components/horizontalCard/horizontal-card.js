import { useCart } from "../../contexts/cart-context";
import "./horizontal-card.css";
const laptopImage = require('../../assets/laptop.png');


const HorizontalCard = (product)=>{
  
    const {removeFromCart}= useCart()
    const incrementQuantity=(product)=>{
        // {cart.map((item)=>item._id===product._id) ? {...item, quantity:product.quantity+1} :item
       
    }

    const decrementQuantity=(product)=>{
        // {cart.map((item)=>item._id===product.id)?{...item, quantity:product.quantity-1} :item

    }
                  
    return(
        <div className="horizontal-card">
            <div className="flex">
                <div className="img-div">
                    <img className="cart-card-image" src= { laptopImage } alt="" />
                    <div className="flex item-btn-div" >
                        <button className="itme-increment-btn" onClick={()=>incrementQuantity(product)}>+</button>
                        <div className="item-count text-center">{product.quantity}</div>
                        <button className="itme-increment-btn" onClick={()=>decrementQuantity(product)} >-</button>
                    </div>
                </div>
                
                <div className="details ">
                    <h2>{product.name}</h2>
                    <p> {product.details}</p>
                    <p> processor:{product.processor}</p>
                    <p>{product.ram} RAM</p>
                    <div className="price-row flex">
                        <p className="bold-large">₹{product.price}</p>
                        <p className="text-strike-through">{product.originalPrice}</p>
                        <p className="text-lightblue"> {product.offer}% off</p>
                    </div>
                            
                </div>
        
            </div>
            {/* <div className="cart-btn-row">
               <div className="cart-btn">
                    <button className="btn-outline danger-outline" onClick={()=>removeFromCart(product._id)}>Remove </button>
                    <button className="solid secondary-solid">Move to WishList</button>
               </div>
                <p className="bold-larger">Total Price:560000</p>
            </div> */}

            <div className="cart-btn-row">
                <button className="btn-outline danger-outline" onClick={()=>removeFromCart(product._id)}>Remove </button>
                <button className="solid secondary-solid">Move to WishList</button>
            </div>
                    
        </div>
 
    )

}
export { HorizontalCard }

                    