import React,{Component, useState} from 'react'
import { Link } from 'react-router-dom'
//import { reqSignup } from '../services/axios'
//import { response } from 'express';

import axios from 'axios'

const Signup = () =>{
    const [user, setUserInfo] = useState({
        id : null,
        pw : null,
        name : null
    });
    const {id,pw,name} = user;

    const onClick = e =>{
        console.log("start axios");
        axios.post('/user/signup',{
            userInfo:{
                id : user.id,
                pw : user.pw,
                name : user.name
            }
        })
        .then(response=>{
            console.log(response);
        });

        setUserInfo("");
    }

    const onChange = e =>{
        const {value , name} = e.target;
        setUserInfo({
            ...user,
            [name]:value
        });

        console.log(value);
    };

    return(
        <div>
            <h1>Signup Page!</h1>
            <input 
                type="text"
                name="name"
                value={user.name}
                onChange={onChange}
                placeholder="NAME"/>
            <br/>
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
            <button onClick={onClick}>Signup</button>
            <br/>
            <Link to='/signup'>
                <button >Home</button>
            </Link>
        </div>
    )
}

export default Signup;