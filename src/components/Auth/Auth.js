import React, { useState, useRef } from 'react'
import { useHistory, useLocation} from 'react-router-dom'
import './Auth.css'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Auth(props) {
  let history = useHistory(),
      location = useLocation();

  let [user, setValue] = useState([]);

  let { from } = location.state || { from: { pathname: '/' } };

  const usernameInput = React.createRef();
  const passwordInput = React.createRef();
  const password = useRef(passwordInput);
  const username = useRef(usernameInput);

  // error handles
  let [usernameError, setUsernameError] = useState(false);
  let [passwordError, setPasswordError] = useState(false);

  let login = () => {
    if (username.current.value === '') {
      return
    }
    const fetchData = async () => {
      try {
        const data = await fetch(`https://api.github.com/search/users?q=${username.current.value}`)
        const response = await data.json()
        setValue(user = response.items[0])
        props.getUserData(user.avatar_url, user.login);
      } catch(err) {
        setUsernameError(true)
      }
      // if user exists
      if (user && user.login.toLowerCase() === username.current.value.toLowerCase()) {
        if (password.current.value.length >= 8 && password.current.value.match(/[A-Z]+/) && password.current.value.match(/[a-z]+/)) {
          fakeAuth.authenticate(() => {
            history.replace(from)
          })
        } else {
          password.current.value = ''
          setPasswordError(passwordError = true)
        }
        setUsernameError(usernameError = false)
      } else {
        setUsernameError(usernameError = true)
        username.current.value = ''
      }
    }
    fetchData()
  }
  

  return (
    <div className="login-block">
      <div className="login-block__container col-10">
        <h4 className='text-center'>Имя пользователя GitHub</h4>
        {usernameError ? <small>Такой пользователь не найден</small> : ''}
        {passwordError ? <small>Введите правильный пароль</small> : ''}
        <div>
          <input className="form-control" ref={username} type="text" placeholder='Имя пользователя'/>
          <input className="form-control" ref={password} type="password" placeholder='Пароль'/>
        </div>
        <button className="btn btn-success" onClick={ login }>Войти</button>
      </div>
    </div>
  )
}

const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true
    localStorage.setItem("mydata", this.isAuthenticated)
    cb()
  },
  logout(cb) {
    this.isAuthenticated = false
    cb()
  }
}