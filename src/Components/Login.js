import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { login } from '../JS/actions/index'

function Login() {

    const dispatch = useDispatch()
    const [local, setLocal] = useState()

    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    
    const loading = useSelector(state => state.userReducer.loading)
    
        const loginUser=(e)=>{
            e.preventDefault();
            dispatch(

                login({
                    username,password
                })
            )
        }
        
    return (localStorage.getItem('token')?
    <Redirect to="/profile"/>:loading? <div>Loading ...{console.log(loading)}</div>:
            

        <div>

            <h1>LOGIN</h1>

            <input type="text" name="username" onChange={e=>setUsername(e.target.value)}/>
            <input type="password" name="password" onChange={e=>setPassword(e.target.value)}/>
            <button type="submit" onClick={loginUser} >Submit</button>
        </div>
    )
}

export default Login
