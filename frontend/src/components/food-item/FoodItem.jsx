import './foodItem.css'
import { assets } from '../../assets/assets'
import { useState } from 'react'

const FoodItem = ({ id, name, image, price, description }) => {
    const [itemCount, setItemCount] = useState(0)
    return (
        <div className='food-item'>
            <div className="food-item-img-container">
                <img src={image} alt={id} />
                {!itemCount ? <img src={assets.add_icon_white} alt="" className="add" onClick={() => setItemCount(prev => prev + 1)} /> : <div className="food-item-container">
                    <img src={assets.remove_icon_red} alt="" className="" onClick={() => setItemCount(prev => prev - 1)} />
                    {itemCount}
                    <img src={assets.add_icon_green} alt="" className="" onClick={() => setItemCount(prev => prev + 1)} />
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
