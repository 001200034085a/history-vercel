import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function SignupFrom(){
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async()=>{
    console.warn(name,email,password);
    let result = await fetch("hhttps://history-api-production.up.railway.app/api/users",{
      method:"post",
      body:JSON.stringify({name,email,password}),
      headers:{
        "Content-Type":'application/json'
      }
    })
    result = await result.json();
    navigate("/login");
    alert("đăng ký thành công")
  }

  return(
    <div style={{marginLeft:"20%"}}>
      <h1>Register</h1><br/>
      <div>
        Name<br/>
        <input type="text" value={name} style={{border:"1px solid black", width:"60%", height:"50px"}} onChange={(e)=>setName(e.target.value)} />
      </div><br/>
      <div>
        Email<br/>
        <input type="email" value={email} style={{border:"1px solid black", width:"60%", height:"50px"}} onChange={(e)=>setEmail(e.target.value)} />
      </div><br/>
      <div>
        Password<br/>
        <input type="password" value={password} style={{border:"1px solid black", width:"60%", height:"50px"}} onChange={(e)=>setPassword(e.target.value)} />
      </div><br/>
      <div>
        <input type="button" value="register" style={{border:"1px solid black", width:"60%", height:"50px"}} onClick={handleRegister} />
      </div>
    </div>
  )
}