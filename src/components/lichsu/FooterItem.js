import React, { useState } from "react";

export default function FooterItem({name, idea, opinion}){

    return(
        <div className="footer-item">
            <div>tên: {name}</div>
            <div>ý kiến cá nhân: {idea}</div>
            <div>góp ý: {opinion}</div><br/>  
        </div>
    )
}