

 const Action =()=> {
 return (dispatch)=>(
         fetch('https://fakestoreapi.com/products')
       .then(res=>res.json())
       .then(data=>{dispatch({
           type : 'get_items',
           payload : data
       })})
 )

}
export default Action