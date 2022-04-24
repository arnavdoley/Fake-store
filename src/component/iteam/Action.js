

 const Action =()=> {
 return async(dispatch)=>(
        await fetch('https://fakestoreapi.com/products')
       .then(res=>res.json())
       .then(data=>{dispatch({
           type : 'get_items',
           payload : data
       })})
 )

}
export default Action