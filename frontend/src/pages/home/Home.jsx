import { useState } from 'react'
import ExploreMenu from '../../components/explore-menu/ExploreMenu'
import Header from '../../components/header/Header'
import './home.css'
import FoodDisplay from '../../components/food-display/FoodDisplay'

const Home = () => {
    const [category, setCategory] = useState('All')
    return (
        <div>
            <Header />
            <ExploreMenu category={category} setCategory={setCategory} />
            <FoodDisplay category={category} />


        </div>
    )
}

export default Home
