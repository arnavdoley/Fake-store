import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom'
import { connect } from 'react-redux'
import { useUserContex } from '../../contex/UserAuthContex'
const mapToProps = (state)=>(
    {
       item: state.iteam.item,
       cart: state.iteam.cart,
       
   })
 function Login({dispatch}) {
 const [email, setemail] = useState("")
 const [password, setpassword] = useState("")
 const [error, seterror] = useState("")
 const{login} =useUserContex();
 const navigate=useNavigate()
 const handlesubmit=async(e)=>{
  e.preventDefault();
  seterror("")
  dispatch({type:"set-login" ,payload:email})
  try{
   await login(email,password)
   
   navigate("/")

  }
  catch(er){
    seterror(er.message)
    
  }

 }
  return (
    <div>
        {error&&(<div class="alert alert-danger" role="alert">
  {error}
</div>)}
      <form onSubmit={handlesubmit}>
    <div class="form-group" >
      <label for="exampleInputEmail1">Email address</label>
      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={(event)=>{setemail(event.target.value)}}/>
      <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1">Password</label>
      <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" onChange={(event)=>{setpassword(event.target.value)}}/>
    </div>
    {/* <GoogleButton
  onClick={() => { console.log('Google button clicked') }}
/> */}
    <button type="submit" class="btn btn-primary">Login</button>
  
  </form></div>
  )
}
export default connect(mapToProps)(Login)
