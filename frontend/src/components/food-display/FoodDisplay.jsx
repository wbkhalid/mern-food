import { useContext } from 'react'
import './foodDisplay.css'
import FoodItem from '../food-item/FoodItem'
import { StoreContext } from '../../context/StoreContext'

const FoodDisplay = ({ category }) => {
    const { food_list } = useContext(StoreContext)
    return (
        <div className='food-display' id='food-display'>
            <h2>Top Dishes for you</h2>
            <div className="food-display-list">
                {

                    food_list?.map((item, index) => (category === 'All' || category === item.category) &&
                        < FoodItem key={index} id={item._id} name={item.name} image={item.image} price={item.price} description={item.description} />)
                }
            </div>
        </div>
    )
}

export default FoodDisplay
