import items from "../component/iteam/items"

const combine={
    items:[],
    item:[],
    cart:[],
}
export default function ItemReducer(state=combine,action){
    
    switch (action.type){
        case "get_items":
            return {...state,items :action.payload}
        case "get_item":
            // var newVenues = state.item.concat(action.payload)
            
           if(state.item.length ==0){
               
               return{...state,item:[action.payload]}
           } 
           else{
            //   var cart= state.item.filter((val)=>{
            //   return val.it.id!=action.payload.it.id
            //       })
                  
                  if(state.item.some((val)=>{return val.it.id==action.payload.it.id})){
                      console.log("copy")
                   
                    
                    const newState = state.item.map(obj =>
                        obj.it.id == action.payload.it.id ? { ...obj, count:obj.count+1 } : obj
                    );
                        return{...state,item:newState}
                  }
                  else{ let  mydata =  [...state.item,action.payload];
                          return{...state , item: mydata };
                      
                  }

                 
           }
           
         case"delete_quant":

      const newData= state.item.map(obj=>obj.it.id==action.payload.it.id?{...obj, count:obj.count-1}:obj);
      return {...state,item:newData}
    //    return {...state,item:cart}
        // if(cart){
        //     return state.item.push("fak")
        // }
        // else
        // {   

        //     return state.item.push(action.payload)
        // }
        //    if (state.item.includes(obj)){
        //        console.log("copy")
        //        return state
        //    }
        //    else{
            
               
        //      let  mydata =  [...state.item,action.payload];
        //    return{...state , item: mydata };
        //    }
          
        // case "add_price":
            
        //     let myData =  [...state.price,action.payload];
        //    return{...state , price: myData };  
        // case "delete_price":
        //     return{...state , price: action.payload }; 
         case "delete_item":
           
             return{...state , item: state.item.filter((value,index)=>index!==action.payload)

                 
             }
        case "log-out":
            console.log(action.payload) 
            // const some=state.cart.map((val)=>{if(val.id==action.payload.id){return true} 
            //                                     else{return false}                    })
            
            
            if(state.cart.length==0){
               const itemEmpty=[]
                return {...state,cart:[action.payload],item:itemEmpty}
            }
           else{
               const some = state.cart.find((o) => o.id == action.payload.id);
               console.log(some)

               if(some){
                   console.log("cart copy")
                   
               const copy= state.cart.map((obj)=> {
                    if(obj.id == action.payload.id)
                    {
                            let myarry = obj.cartItem.concat(action.payload.cartItem)

                            return {...obj,cartItem:myarry }
                    }

                        return obj;

               }) 
               let alsoEmpty=[]
               return{...state,cart:copy, item:alsoEmpty}
            }
            else{ let  mydata =  [...state.cart,action.payload];
                let alsoEmpty=[]
                return{...state , cart: mydata,item:alsoEmpty };
            
        }
        }
           
          
           
           case "set-login":
           const sameUser= state.cart.find((val)=>val.id==action.payload);

            //console.log(sameUser);

            const mydata =  sameUser? sameUser.cartItem : [];

            console.log(mydata);
           
           return {...state,item: mydata}
            default:
                return state
    } 


    
}