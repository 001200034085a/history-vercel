import { Input } from "antd";
import React, { useState } from "react";
import axios from "axios";

export default function ForgotPassword(){
    const [email, setEmail] = useState("");


    const handleForgot = async(e)=>{
        
        axios.post("http://localhost:5000/api/users/forgot-password",{
          email:email
        })
        document.write(`<h1>kiểm tra email đổi mật khẩu</h1><a href="http://localhost:3000//login">quay về login</a>`)
      } 
 
    return(
        <div>
           <form >
              <Input type="email" style={{ borderRadius:'7px', width:"60%", height:"50px"}} onChange={(e)=>setEmail(e.target.value)} />
              <Input onClick={handleForgot} style={{ borderRadius:'7px', width:"60%", height:"50px"}} type="submit" value="submit"  />
           </form>
        </div>
    )
}
