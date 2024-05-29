import React, {useContext, useState, useEffect} from 'react'
import {store} from './App'
import {Navigate} from 'react-router-dom'
import axios from 'axios'

const Myprofile = () => {
    const [token, setToken] = useContext(store)
    const [data, setData] = useState(null)
    useEffect(()=>{
        axios.get('http://localhost:5002/myprofile', {
            headers: {
                'x-token' : token
            }
        }).then(res => setData(res.data)).catch((err)=> console.log(err))
    }, [])


    if (!token){
        return <Navigate to='/login'/>
    }
  return (
    <div>
        {
            data &&
        <center>
            Welcome to user : {data.username}
        </center>
}
    </div>
  )
}

export default Myprofile