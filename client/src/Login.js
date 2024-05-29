import React,{useState, useContext} from 'react'
import { Navigate} from 'react-router-dom'
import axios from 'axios'
import {store} from './App'

const Login = () => {
    const [token, setToken] = useContext(store)
    const [data, setData] = useState({
        email:"",
        password:"",
    })
    const changeHandler = e =>{
        setData({...data, [e.target.name]: e.target.value})
    }
    const submitHandler = e =>{
        e.preventDefault()
        axios.post("http://localhost:5002/login", data).then(
            res => setToken(res.data.token)
        ).catch(err => console.log(err))
    }
    if (token){
        return <Navigate to='/myprofile'/>
    }
  return (
    <div>
        <center>
            <form onSubmit={submitHandler}>
                <h3>Login</h3>
                <input type="email"  name="email" placeholder='Email' onChange={changeHandler}/> <br/>
                <input type="password"  name="password" placeholder='Password'/> <br/>
                <input type="submit" value="Login"/>
            </form>
        </center>
        
    </div>
  )
}

export default Login