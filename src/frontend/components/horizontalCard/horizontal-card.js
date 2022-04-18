import { useCart } from "../../contexts/cart-context";
import { useWishlist } from "../../contexts/wishlist-context";
import "./horizontal-card.css";
const laptopImage = require('../../assets/laptop.png');


const HorizontalCard = (product)=>{
  
    const {removeFromCart , moveToWishlist, incrementQuantity,decrementQuantity}= useCart()
    const { addToWishList } = useWishlist();
                      
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
            
            <div className="cart-btn-row">
                <button className="btn-outline danger-outline" onClick={()=>removeFromCart(product._id)}>Remove </button>
                <button className="solid secondary-solid" onClick={()=>{
                        addToWishList(product)
                        moveToWishlist(product._id)
                    }}
                >Move to WishList</button>
            </div>
        </div>
    )
}
export { HorizontalCard }

                    