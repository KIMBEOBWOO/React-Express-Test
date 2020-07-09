import React,{Component, useState} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';


const Login = () =>{
    const [user, setUserInfo] = useState({
        id : null,
        pw : null
    });
    const {id,pw} = user;
    
    const onChange = e =>{
        const {value,name} = e.target;
        setUserInfo({
            ...user,
            [name]:value
        });
    }

    const onClick = e =>{
        console.log('axios login start id = '+user.id +","+user.pw);
        axios.post('/user/login',{
            userInfo:{
                id:String(user.id),
                pw:String(user.pw)
            }
        })
        .then(response=>{
            console.log(response);
        })
        
        setUserInfo("");
    }

    return(
        <div>
            <h1>Login Page!</h1>
            <input 
                type="text"
                name="id"
                value={user.id}
                onChange={onChange}
                placeholder="ID"/>
            <br/>
            <input 
                type="password"
                name="pw"
                value={user.pw}
                onChange={onChange}
                placeholder="PW"/>
            <br/>
            <br/>
            <button onClick={onClick}>Login</button>
            <br/>
            <Link to='/home'>
                <button>Home</button>
            </Link>
            <Link to='/signup'>
                <button>Signup</button>
            </Link>
            
        </div>
    )
}

export default Login;