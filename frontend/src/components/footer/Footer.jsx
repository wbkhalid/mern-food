import './footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
    return (
        <div className='footer' id='footer'>
            <div className="footer-content">
                <div className="footer-content-left">
                    <img src={assets.logo} alt="" />
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. In atque quibusdam recusandae maiores dolores perspiciatis fugiat quam quas! Rem porro voluptate possimus sint quo tenetur ut earum nesciunt, iusto nobis.</p>
                    <div className="footer-social-icon">
                        <img src={assets.facebook_icon} alt="" />
                        <img src={assets.twitter_icon} alt="" />
                        <img src={assets.linkedin_icon} alt="" />
                    </div>
                </div>
                <div className="footer-content-center">
                    <h2>Company</h2>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Delivery</li>
                        <li>
                            Privacy Policy
                        </li>
                    </ul>
                </div>
                <div className="footer-content-right">
                    <h2>Get in Touch</h2>
                    <ul>
                        <li>03058995953</li>
                        <li>tamato@gamil.com</li>
                    </ul>
                </div>
            </div>
            <hr />
            <p className='footer-copyright'>@2024</p>

        </div>
    )
}

export default Footer
