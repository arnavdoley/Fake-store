import React from 'react'
import {useEffect} from 'react'
import { connect,dispatch } from 'react-redux'
import {useNavigate} from "react-router-dom"
import Action from '../iteam/Action'
import ActionItem from './ActionItem'
import { useUserContex } from '../../contex/UserAuthContex'

const mapToProps = (state)=>(
 {
    items: state.iteam.items,
    
    
})
 function Items({items,dispatch}) {
  const {User} = useUserContex();
  const navigate=useNavigate() 
  const additem=(val)=>{
   if(User)
    dispatch({ type : 'get_item', payload : {it:val,count:1} })
    else{
      navigate("/login")
    }
  }
  
  useEffect(() => {
      dispatch(Action())
  }, [dispatch])
  
    return (
      
    <div className='products'>
      
      <div>{items?.map((val)=>{
     return   <div class="container">
     <div class="row">
       <div class="col-12 col-sm-8 col-md-6 col-lg-4">
         <div class="card">
           <img class="card-img" loading="lazy" src={val.image} alt="Vans"/>
           <div class="card-img-overlay d-flex justify-content-end">
             <a href="#" class="card-link text-danger like">
               <i class="fas fa-heart"></i>
             </a>
           </div>
           <div class="card-body">
             <h4 class="card-title">{val.title}</h4>
            
             <div class="buy d-flex justify-content-between align-items-center">
               <div class="price text-success"><h5 class="mt-4">${val.price}</h5></div>
              <button className="btn btn-danger mt-3" onClick={()=>{additem(val)}} style={{position : 'absolute',right:10}}>Add to Cart</button>
             </div>
           </div>
         </div>
           
       </div>
     </div>
   </div>
    })}
  </div>
    </div>
  
  )
}
export default connect(mapToProps)(Items)