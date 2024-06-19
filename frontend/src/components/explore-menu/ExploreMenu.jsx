import './exploreMenu.css'
import { menu_list } from '../../assets/assets'

const ExploreMenu = ({ category, setCategory }) => {
    return (
        <div className='explore-menu' id='explore-menu'>
            <h1>Explore our Menu</h1>
            <div className="explore-menu-text">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus nisi hic ex voluptas eligendi maiores deserunt voluptate assumenda dicta necessitatibus sint corporis et, quasi accusantium magni temporibus tempore autem vero?
            </div>
            <div className="explore-menu-list">
                {
                    menu_list.map((item, index) => <div className="explore-menu-list-item" key={index} onClick={() => setCategory(prev => prev === item.menu_name ? 'All' : item.menu_name)}>
                        <img src={item.menu_image} alt={item.menu_name} className={category === item.menu_name ? 'active' : ''} />
                        <p>{item.menu_name}</p>
                    </div>

                    )
                }
            </div>
        </div>
    )
}

export default ExploreMenu
