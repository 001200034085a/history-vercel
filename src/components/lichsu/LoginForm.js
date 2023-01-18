import React, { useContext, useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { setUserSession } from "../Utils/Common";
import axios from "axios";
import { Input } from "antd";





const LoginForm = ({ setToken }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] =useState("");
  const [error, setErrror] = useState(null);
  const navigate = useNavigate();
  

  const handleLogin = async(e)=>{
   

    setErrror(null)
    axios.post("https://fragile-fly-school-uniform.cyclic.app/api/users/login",{
      email:email, 
      password:password
    }).then((response)=>{
      setUserSession(response.data.token, response.data)
      navigate("/")
    }).catch(err=>{
      if(err.response.status === 400 || err.response.status === 401){
        setErrror(err.response.data.message)
      }
      else{
        setErrror("Something went wrong. Please try again later")
      }
    })
  } 

  return(
    <div style={{marginLeft:"20%"}}>
    <h1>Login</h1><br/>
    <div>
      Email<br/>
      <Input type ="email" style={{ borderRadius:'7px', width:"60%", height:"50px"}} onChange={(e)=>setEmail(e.target.value)} />
    </div><br/>
    <div>
      PassWord<br/>
      <Input type ="password" style={{ borderRadius:"7px", width:"60%", height:"50px"}} onChange={(e)=>setPassword(e.target.value)}/>
    </div><br/>
    {error && <div style={{color:"red"}}>{error}</div>}
    <div>
      <Input onClick={handleLogin} type="button" value="Login" style={{ background:'#4ee', width:"60%", height:"50px"}} />
    </div><br/><br/>
    <div>
      <a href="https://localhost:3000/forgot-password">quên mật khẩu</a>
    </div>
   </div>
  )
};

export default LoginForm;
