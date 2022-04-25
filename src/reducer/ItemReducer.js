

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
           
            
           if(state.item.length ===0){
               
               return{...state,item:[action.payload]}
           } 
           else{
           
                  
                  if(state.item.some((val)=>{return val.it.id===action.payload.it.id})){
                      
                   
                    
                    const newState = state.item.map(obj =>
                        obj.it.id === action.payload.it.id ? { ...obj, count:obj.count+1 } : obj
                    );
                        return{...state,item:newState}
                  }
                  else{ let  mydata =  [...state.item,action.payload];
                          return{...state , item: mydata };
                      
                  }

                 
           }
           
         case"delete_quant":

      const newData= state.item.map(obj=>obj.it.id===action.payload.it.id?{...obj, count:obj.count-1}:obj);
          const test= state.item.filter((val)=>(val.it.id===action.payload.it.id && action.payload.count===1 ))
          if(test.length===0){
               return {...state,item:newData}
          }
     else{
        return{...state , item: state.item.filter((val)=>val.it.id!==action.payload.it.id)}
     }
  
         case "delete_item":
           
             return{...state , item: state.item.filter((val,index)=>index!==action.payload)

                 
             }
        case "log-out":
         
            
            if(state.cart.length===0){
               const itemEmpty=[]
                return {...state,cart:[action.payload],item:itemEmpty}
            }
           else{
               const some = state.cart.find((o) => o.id === action.payload.id);
             

               if(some){
                  
                   
               const copy= state.cart.map((obj)=> {
                    if(obj.id === action.payload.id)
                    {
                           

                            return {...obj,cartItem:action.payload.cartItem }
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
           const sameUser= state.cart.find((val)=>val.id===action.payload);

            

            const mydata =  sameUser? sameUser.cartItem : [];

           
           return {...state,item: mydata}
            default:
                return state
    } 


    
}