import React from "react";
import { Routes , Route } from "react-router-dom";
import  Signupform from "../view/Signup/Signupform";
import Home from '../view/Home'
import ProfileRegister from "../view/ProfileRegister";
import Layout from '../Layout'

export default function Allroutes() {
  return (
    <React.Fragment>
        <Routes>
          <Route path='/' element={<Layout><Home/></Layout>} />
          <Route path='/profile-create' element={<Layout><ProfileRegister/></Layout>} />
          <Route path='/signup' element={<Signupform/>} />
        </Routes>
        
    </React.Fragment>
  );
}
