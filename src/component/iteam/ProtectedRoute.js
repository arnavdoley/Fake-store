import { Navigate } from "react-router-dom";
import React from "react";
import {useUserContex} from "../../contex/UserAuthContex" 
export default function ProtectedRout({children}) {
  const {User} = useUserContex();

  if (!User) {
      return <Navigate to="/login"></Navigate>
  }
    return children;
}
