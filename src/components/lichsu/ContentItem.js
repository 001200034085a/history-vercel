import React from "react";


export default function ContentItem({name,image,address,country}){
    return(
        <div className="contentItem">
             <img src={image} />
             <div>Tên:{name}</div>
             <div>Quê quán:{address}</div>
             <div>Đất Nước:{country}</div>
             
        </div>
    )
}
