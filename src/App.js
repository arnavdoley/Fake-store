import { useState,lazy,Suspense } from "react";
import "./App.css";
import { connect } from "react-redux";
import { useUserContex } from "./contex/UserAuthContex";
import { Routes, Route, Link,useMatch,useResolvedPath, useNavigate} from "react-router-dom";
import ProtectedRout from "./component/iteam/ProtectedRoute";
const Login=lazy(()=>import("./component/iteam/Login"));
const Items = lazy(() => import(  "./component/iteam/items"))
const ActionItem =lazy(()=>import ("./component/iteam/ActionItem"));
const Signup= lazy(()=>import ("./component/iteam/Signup"));


const mapToProps = (state) => ({
  item: state.iteam.item,
  cart: state.iteam.cart,
});
function App({ item, cart, dispatch }) {
  const [error, seterror] = useState("");
  const { User, logout } = useUserContex();
  const navigate = useNavigate();
  const handlelogout = async () => {
    seterror("");
    dispatch({ type: "log-out", payload: { id: User.email, cartItem: item } });

    try {
      await logout();
      navigate("/");
    } catch (error) {
      seterror(error.message);
    }
  };

  return (
    <div >
      <nav className="navbar navbar-expand navbar-light bg-light nav-space">
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <CustomLink to="/">Home</CustomLink>
            <CustomLink to="/cart">
              <i className="fa-solid fa-cart-shopping fa-1x"></i>
              {User && item.length > 0 && item.length}
            </CustomLink>
            
              {!User && (
                <div className="log">
                  <CustomLink to="/login">login</CustomLink>
                  <CustomLink to="/signup">signup</CustomLink>
                </div>
              )}
              {User && (
                <div  className="log out"> 
                <p>
                    
                    WELCOME  {User &&
                      User.email.slice(0, User.email.search("@")).toUpperCase()}
                  </p>
                  <button
                    onClick={handlelogout}
                    className="btn btn-outline-danger"
                    
                  >
                    
                    logout
                  </button>
                 
                </div>
              )}
            
          </div>
        </div>
      </nav>
      {error && (
        <div className="alert alert-danger" role="alert">
          
          {error}
        </div>
      )}<Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Items></Items>} />
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
        <Route
          path="/cart"
          element={
            <ProtectedRout>
              <ActionItem />
            </ProtectedRout>
          }
        />
      </Routes>
      </Suspense>
    </div>
  );
}
function CustomLink({ children, to }) {
  let resolve = useResolvedPath(to);
  let match = useMatch({ path: resolve.pathname });


  return (
    <div className="CustomLink">
      <Link
        style={{
          color: match ? "white" : "black",
          backgroundColor: match ? "blue" : "white",
        }}
        to={to}
      >
        {children}
      </Link>
    </div>
  );
}

export default connect(mapToProps)(App);
