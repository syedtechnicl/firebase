import React, { useState } from 'react'
import Login from './Login'
import Signup from './Signup'
import Home from './Home'
import {auth} from './firebase'
import { createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut} from 'firebase/auth'


const App = () => {

  const [isLogin,setLogin] = useState(false)


  const login=(email,password)=>{
   signInWithEmailAndPassword(auth,email,password)
   .then((user)=>{setLogin(true)})
   .catch((err)=>{alert(err.message)})
  }


  const signup=(email,password,conpass,name)=>{
if (password !=conpass) {
  alert('Dosnt Match Password')
  return
}

createUserWithEmailAndPassword(auth,email,password,name)
.then(user=>alert('Account create success'))
.catch((err)=>alert(err.message))

}


const logout=()=>{
 setLogin(false)
 signOut(auth)
}



return (
<>
<h1>Hello world</h1>
<Login login={login}/>
<Signup signup={signup}/>

{
 isLogin ? <div><Home logout={logout}/></div>
 : null 
}

</>
    )
}

export default App