import React,{Component} from 'react'
import {Link} from 'react-router-dom'

const Home = () =>{
    return(
        <div>
            Home Page!
            <Link to='/login'>
                <button>login</button>
            </Link>
        </div>
    )
}

export default Home;