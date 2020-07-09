import axios from 'axios'
import Signup from '../containers/Signup'

export function reqSignup(user){

    axios.get('/signup',{
        params:{
            id:user.id,
            pw:user.pw,
            name:user.name
        }
    })
    
}