import './foodItem.css'
import { assets } from '../../assets/assets'
import { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'

const FoodItem = ({ id, name, image, price, description }) => {
    const { cartItem, addToCart, removeToCart } = useContext(StoreContext)
    return (
        <div className='food-item'>
            <div className="food-item-img-container">
                <img src={image} alt={id} />
                {!cartItem[id] ? <img src={assets.add_icon_white} alt="" className="add" onClick={() => addToCart(id)} /> : <div className="food-item-container">
                    <img src={assets.remove_icon_red} alt="" className="" onClick={() => removeToCart(id)} />
                    {cartItem[id]}
                    <img src={assets.add_icon_green} alt="" className="" onClick={() => addToCart(id)} />
                </div>}
            </div>
            <div className="food-item-info">
                <div className="food-item-name-rating">
                    {
                        name
                    }
                    <img src={assets.rating_starts} alt='rating_starts' />
                </div>
                <p className="food-item-desc">{description}</p>
                <p className="food-item-price">${price}</p>
            </div>
        </div>
    )
}

export default FoodItem
