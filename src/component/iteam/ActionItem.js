import { shallowEqual, useDispatch, useSelector } from "react-redux";
import React from "react";
import { useEffect } from "react";
export default () => {
  const [cart, setcart] = React.useState([]);
  const [count, setcount] = React.useState(0);
  const price= useSelector((state)=>state.iteam.price)
  const pro = useSelector((state) => state.iteam.item,shallowEqual);
 const dispatch =useDispatch()
 
 const handleDelet = (index)=>{
   
    dispatch({
        type : 'delete_item',
        payload : index
    })
  
    
 } 
 const handleTotal=()=>{
  const total=  pro.map((val)=>{return val.it.price*val.count})
  console.log(total)
 const sum= total.reduce((partialSum, a) => partialSum + a, 0);
 return (Math.round(sum * 100))/100.0
}
 
 const addPrice=(obj,quant)=>{
   
    dispatch({
        type : 'get_item',
        payload : {it:obj,count:quant}
    })
   }
   const removePrice =(obj,quant)=>{
       
       
       dispatch({
        type : 'delete_quant',
        payload : {it:obj,count:quant}
       })
   }
  return (
      
    <div>
        <h1>Cart</h1>
        {console.log(pro)}
      {pro.map((val,index) => {
        return (
          <div className="d-flex justify-content-around align-items-center cart border border-primary rounded">
            <img
              src={val.it.image}
              class="img-fluid img-thumbnail"
              width="100"
              height="100"
            ></img>
            <h4>{val.it.title}</h4>
            <div className="d-flex flex-column align-self-center">
              {val.count}
              <div className="button-group">
                <button className="btn btn-outline-success m4" onClick={()=>addPrice(val.it,val.count)}>+</button>
                {val.count>1&&(<button className="btn btn-outline-danger" onClick={()=>{removePrice(val.it,val.count)}}>-</button>)}
              </div>
            </div>
            <h4>{val.it.price}</h4>
            <button className="btn btn-outline-danger" onClick={()=>{handleDelet(index)}}>x</button>
          </div>
        )
      })}
    {pro.length>0&&(<h2>{handleTotal()}</h2>)}
    </div>);
};
