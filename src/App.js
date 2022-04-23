import { useState } from "react";
import "./App.css";
import { connect } from "react-redux";
import { useUserContex } from "./contex/UserAuthContex";
import Items from "./component/iteam/items";
import ActionItem from "./component/iteam/ActionItem";
import { Routes, Route,Link,useMatch,useResolvedPath,useNavigate} from "react-router-dom";
import Login from "./component/iteam/Login";
import Signup from "./component/iteam/Signup";
import ProtectedRout from "./component/iteam/ProtectedRoute";

const mapToProps = (state)=>(
  {
     item: state.iteam.item,
     cart: state.iteam.cart,
     
 })
function App({item,cart,dispatch}) {
  const [error, seterror] = useState("")
  const {User,logout} = useUserContex();
  const navigate =useNavigate()
  const handlelogout=async()=>{
     seterror("")
     dispatch({type:"log-out",payload:{id:User.email,cartItem:item}})

      try {
          await logout()
              navigate("/")
      } catch (error) {
          seterror(error.message)
      }
  }

  return (
    <div className="App">
      
      
        <nav class="navbar navbar-expand navbar-light bg-light">
        
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <CustomLink to="/">  
            Home
        </CustomLink>
            <CustomLink to="/cart"> 
                Cart 
              </CustomLink>
{!User&&(   <><CustomLink to="/login">  
            login
          </CustomLink>
          <CustomLink to="/signup">  
            signup
       </CustomLink></>) }
{User&&(<><button onClick={handlelogout} className="btn btn-outline-danger"> logout</button>
<p>Home welcome {User&&User.email}</p></>)}
            </div>
          </div>
        </nav>
        {error&&(<div className="alert alert-danger" role="alert"> {error} </div>)}
        <Routes>
          <Route path="/" element={<Items />} />
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/signup" element={<Signup></Signup>}></Route>
          <Route path="/cart" element={<ProtectedRout><ActionItem /></ProtectedRout>} />
        </Routes>
      
      
    </div>
  );
}
function CustomLink({children, to }){
let resolve=useResolvedPath(to);
let match = useMatch({path:resolve.pathname})

return(
  <div className="CustomLink">
    <Link style={{ color:match?'white':'black' ,backgroundColor:match?"blue":"white" }}to={to} >{children}</Link>
  </div>
)
}

export default connect(mapToProps)(App);
