import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { setUserSession } from "../Utils/Common";
import axios from "axios";
import { Input } from "antd";


export default function SignupFrom(){
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setErrror] = useState(null);
  const navigate = useNavigate();

  const handleRegister = async()=>{
    console.warn(name,email,password);
    // let result = await fetch("https://fragile-fly-school-uniform.cyclic.app/api/users",{
    //   method:"post",
    //   body:JSON.stringify({name,email,password}),
    //   headers:{
    //     "Content-Type":'application/json'
    //   }
    // })
    // result = await result.json();
    // navigate("/login");
    // alert("đăng ký thành công");

    setErrror(null)
    axios.post("https://fragile-fly-school-uniform.cyclic.app/api/users",{
      name:name,
      email:email, 
      password:password
    }).then((response)=>{
      navigate("/")
      setUserSession(response.data.token, response.data);
      alert("đăng ký thành công")
    }).catch(err=>{
      if(err.response.status === 400 || err.response.status === 401){
        setErrror(err.response.data.message)
      }
      else{
        setErrror("đăng ký thất bại")
      }
    })
  }

  return(
    <div style={{marginLeft:"20%"}}>
      <h1>Register</h1><br/>
      <div>
        Name<br/>
        <Input type="text" value={name} style={{ borderRadius:'7px', width:"60%", height:"50px"}} onChange={(e)=>setName(e.target.value)} />
      </div><br/>
      <div>
        Email<br/>
        <Input type="email" value={email} style={{ borderRadius:'7px', width:"60%", height:"50px"}} onChange={(e)=>setEmail(e.target.value)} />
      </div><br/>
      <div>
        Password<br/>
        <Input type="password" value={password} style={{ borderRadius:'7px', width:"60%", height:"50px"}} onChange={(e)=>setPassword(e.target.value)} />
      </div><br/>
      {error && <div style={{color:"red"}}>{error}</div>}
      <div>
        <input type="button" value="register" style={{border:"1px solid black", width:"60%", height:"50px"}} onClick={handleRegister} />
      </div>
    </div>
  )
}
