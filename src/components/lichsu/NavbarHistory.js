import React, { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {  Container, Nav, Navbar } from "react-bootstrap";
import { Button } from 'antd';
import { getUser, removeUserSession } from "../Utils/Common";



export default function NavbarHistory(){
  const navigate = useNavigate();
  
  const user = getUser();
  
  const activeClassName = ({ isActive }) =>isActive ? "nav-link p-4 text-primary " : "nav-link p-4";
  const logoutUser = ()=>{
    removeUserSession();
    navigate("/login")
  }

  const Login =()=>{
    navigate("/login")
  };
  
  return (
    
    <div className="ac"> 
       <Navbar 
        bg="dark"
        variant="dark"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <div className="ab">
          <Nav>
            <Nav.Link className="ms-5"><h2><i>Anh Hùng Dân Tộc</i></h2></Nav.Link>
            <Navbar.Brand href="/" className="ms-5">
              <img
                src="https://vn-test-11.slatic.net/p/a49378a595c3ee8579ebab3e8ad59883.jpg"
                alt=""
                width="70px"
              />
            </Navbar.Brand>
          </Nav>
        </div>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          {  user ? (
            <>
              <div style={{color:"red"}}>Xin Chào {user.name}</div>&nbsp;
              <button
                style={{border:"1px solid red", color:"red", width:"60px", height:"40px", background:"white"}}
                onClick={logoutUser}
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <button
              style={{border:"1px solid blue", color:"blue", width:"60px", height:"40px", background:"white"}}
                onClick={Login}
              >
                Login
              </button>
              <button
                style={{ color:"white", width:"60px", height:"40px", background:"blue"}}
                onClick={() => navigate("/signup")}
              >
                Signup
              </button>
            </>
          )}
        </div>
        </Navbar>
      <Navbar bg="dark" variant="dark">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
        <Navbar.Collapse
          id="basic-navbar-nav"
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Nav className="navbar-history">
            <NavLink to="/" className={activeClassName}>
              Trang chủ
            </NavLink> &nbsp;&nbsp;&nbsp;
            <NavLink to="/tt" className={activeClassName}>
              Thông tin
            </NavLink>&nbsp;&nbsp;&nbsp;
            <NavLink to="/tk" className={activeClassName}>
              Thời kỳ
            </NavLink>&nbsp;&nbsp;&nbsp;
            <NavLink to="/ct" className={activeClassName}>
              Chiến tích
            </NavLink>&nbsp;&nbsp;&nbsp;
            <NavLink to="/nv" className={activeClassName}>
              Nvật
            </NavLink>&nbsp;&nbsp;&nbsp;
            {/* <NavLink to="/" className={activeClassName}>
              Ad
            </NavLink> */}
            <a href="/aa">Ad</a>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
    
  );
};