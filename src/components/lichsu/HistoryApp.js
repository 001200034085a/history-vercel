import React, {useEffect,useState} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavbarHistory from "./NavbarHistory";
import ThongTin from "./ThongTin";
import ChienTich from "./ChienTich";
import TrangChu from "./TrangChu";
import ThoiKy from "./ThoiKy";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import HistoryAdmin from "../phanquyen/HistoryAdmin";
import ContentHistory from "./ContentHistory";
import HistoryDetai from "./HistoryDetai";
import VideoItem from './VideoItem';
import { getToken, getUser, removeUserSession, setUserSession } from "../Utils/Common";
import axios from "axios";
import ForgotPassword from "./ForgotPassword";


export default function HistoryApp(){
  
  const user = getUser();
  
  

  return (
   <div>
    
    
    <BrowserRouter>
      <NavbarHistory></NavbarHistory>
      <Routes>
        <Route path="/" element={<TrangChu/>}></Route>
        <Route path="/:_id" element={<VideoItem/>}></Route>
        <Route path="/tt" element={<ThongTin></ThongTin>}></Route>
        <Route path="/tk" element={<ThoiKy></ThoiKy>}></Route>
        <Route path="/ct" element={<ChienTich></ChienTich>}></Route>
        <Route path="/login" element={<LoginForm ></LoginForm>}></Route>
        {user ? <Route path="/aa" element={<HistoryAdmin/>}></Route>:<Route path="/aa" element={<div><h1 style={{color:"red"}}>Bạn cần phải đăng nhập !!!</h1>&nbsp;<a href="/login">login ở đây</a></div>}></Route>}
        <Route path="/signup" element={<SignupForm/>}></Route>
        <Route path="*" element={<h1>404 Not Found !!!</h1>}></Route>
        <Route path={"/nv"} element={<ContentHistory/>} >
          <Route path={"/nv/:_id"} element={<HistoryDetai/>} ></Route> 
        </Route>
            
        <Route path={"/forgot-password"} element={<ForgotPassword />}></Route>
      </Routes>
      
    </BrowserRouter>
    
   </div> 
  )

  
}
