import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import {useUserContex} from "../../contex/UserAuthContex"
export default function Signup() {
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  const [error, seterror] = useState("")
  const {signup} = useUserContex()
  const navigate =useNavigate()
  const handlesubmit= async(e)=>{
    e.preventDefault();
    
    seterror("")
    
    try{
      await signup(email,password)
      navigate("/")
    }
    catch(er){
      seterror(er.message)
    }
  }
  return (
    <div>
      {error&&(<div classNmae="alert alert-danger" role="alert">
  {error}
</div>)}
       <form onSubmit={handlesubmit}> 
    <div class="form-group">
      <label for="exampleInputEmail1">Email address</label>
      <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={(event)=>{setemail(event.target.value)}}/>
      <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1">Password</label>
      <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" onChange={(event)=>{setpassword(event.target.value)}}/>
    </div>
    <div class="form-group form-check">
      <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
      <label class="form-check-label" for="exampleCheck1">Check me out</label>
    </div>
    <button type="submit" className="btn btn-primary">signup</button>


  </form></div>
  )
}