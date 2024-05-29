import React,{useState} from 'react'
import axios from 'axios'

const Register = () => {
    const [data, setData] = useState({
        username:"",
        email:"",
        password:"",
        comfirmpassword:""
    })
    const changeHandler = e =>{
        setData({...data, [e.target.name]: e.target.vale})
    }
    const submitHandler = e =>{
        e.preventDefault()
        axios.post("http://localhost:5002/register", data).then(
            res => alert(res.data)
        )
    }
  return (
    <div>
        <center>
            <form onSubmit={submitHandler}>
                <h3>Regiser</h3>
                <input type="text"  name="username" placeholder='User Name' onChange={changeHandler}/> <br/>
                <input type="email"  name="email" placeholder='Email' onChange={changeHandler}/> <br/>
                <input type="password"  name="password" placeholder='Password'/> <br/>
                <input type="password"  name="confirmpassword" placeholder='Confirm Password'/> <br/>
                <input type="submit" value="Register"/>
            </form>
        </center>
        
    </div>
  )
}

export default Register