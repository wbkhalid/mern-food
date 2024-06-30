import { useState } from 'react'
import { assets } from '../../assets/assets'
import './loginPopup.css'

const LoginPopUp = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState('SignUp')
  const [data, setData] = useState({
    name: '',
    email: "",
    password: ""
  })

  const onChnageHandler = (event) => {
    const name = event.target.name
    const value = event.target.value

    setData(data => ({ ...data, [name]: value }))
  }
  return (
    <div className='login-popup'>
      <form className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img src={assets.cross_icon} alt="" onClick={() => setShowLogin(false)} />
        </div>

        <div className="login-popup-inputs">
          {
            currState === 'SignUp' ? <input type="text" placeholder='name' name='name' value={data.name} onChange={onChnageHandler} /> : <></>
          }
          <input type="email" name='email' value={data.email} onChange={onChnageHandler} />
          <input type="password" name='password' value={data.password} onChange={onChnageHandler} />
        </div>
        <button type='submit'>{currState === 'SignUp' ? 'Create an account' : 'Login'}</button>
        <div className="login-popup-condition">
          <input type="checkbox" />
          <p>Agree Term and Conditions</p>
        </div>
        {
          currState === "Login" ? <p>Create a new Account <span onClick={() => setCurrState('SignUp')}>Click here</span></p> : <p>Already have an account <span onClick={() => setCurrState('Login')}>Click here</span></p>
        }
      </form>

    </div>
  )
}

export default LoginPopUp
