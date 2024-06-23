import { useState } from 'react'
import { assets } from '../../assets/assets'
import './loginPopup.css'

const LoginPopUp = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState('SignUp')
  return (
    <div className='login-popup'>
      <form className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img src={assets.cross_icon} alt="" onClick={() => setShowLogin(false)} />
        </div>

        <div className="login-popup-inputs">
          {
            currState === 'SignUp' ? <input type="text" placeholder='name' /> : <></>
          }
          <input type="email" />
          <input type="password" />
        </div>
        <button>{currState === 'SignUp' ? 'Create an account' : 'Login'}</button>
        <div className="login-popup-condition">
          <input type="checkbox" />
          <p>Agree Term and Conditions</p>
        </div>
        {
          currState === "Login" ? <p>Create a new Account <span onClick={()=>setCurrState('SignUp')}>Click here</span></p> : <p>Already have an account <span onClick={()=>setCurrState('Login')}>Click here</span></p>
        }
      </form>

    </div>
  )
}

export default LoginPopUp
