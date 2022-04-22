import{createContext,useContext,useEffect,useState} from "react"
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
  } from "firebase/auth";
  import { auth } from "../Firebase";
  const userAuthContext =createContext()
  
  export function UserAuthContextProvider({ children }){
    const [User, setUser] = useState("")
    function signup(email,password){
        return createUserWithEmailAndPassword(auth,email,password)
    }
    function login(email,password){
        return  signInWithEmailAndPassword(auth,email,password)
    }
    function logout (){
      return signOut(auth)
    }
    useEffect(() => {
     const unsuscribe= onAuthStateChanged(auth,(currentUser)=>{
          setUser(currentUser)
      })
    
      return () => {
          unsuscribe()
      }
    }, [])
    
      return  <userAuthContext.Provider value={{User,signup,login,logout}}>{children}</userAuthContext.Provider>
    

  }
  export function useUserContex() {
    return useContext(userAuthContext);
  }