import React, { useState } from "react";
import HistoryData from "../../data/HistoryData";
import AdminItem from "./AdminItem";
import {
    UserAddOutlined ,
    SaveOutlined ,
    FullscreenExitOutlined 
} from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from 'antd';
import axios from "axios";


export default function AdminCreateForm({onCreateForm}){
    const [editable, setEditable]=useState(false);
    
    const [image, setImage]=useState('');
    const [name, setName]=useState('');
    const [dob, setDob]=useState('');
    const [pob, setPob]=useState("");
    const [description, setDescription]=useState('');
    const [address, setAddress]=useState('');
    const [country, setCountry]=useState('');
    const [date, setDate] = useState("");
    const [position, setPosition]=useState('');
    const [period, setPeriod]=useState('');
    const [career, setCareer]=useState('');
    const [evaluate, setEvaluate]=useState('');
    const [prize, setPrize]=useState('');
    const [medal, setMedal]=useState('');
    const [honnors, setHonnors] = useState("");
    const [url, setUrl] = useState("");
    const [imageVideo, setImageVideo] = useState("");
    const [likeVideo, setLikeVideo] = useState("");
    const [disLikeVideo, setDislikeVideo] = useState("");
    const [like, setLike] = useState("");
    const [dislike, setDislike] = useState("");
    const [star, setStar] = useState("");

    

    const handleCreateForm= async (event)=>{
        event.preventDefault();
        
        onCreateForm(name, image, dob, pob, description, position, career, evaluate, prize, address, country, date, period, medal, honnors, url, imageVideo, likeVideo, disLikeVideo, like, dislike, star);

       setImage("");
       setName("");
       setDob("");
       setPob("");
       setDescription("");
       setAddress("");
       setCountry("");
       setDate("");
       setPosition("");
       setPeriod("");
       setCareer("");
       setEvaluate("");
       setPrize("");
       setMedal("");
       setHonnors("");
       setUrl("");
       setImageVideo("");
       setLikeVideo("");
       setDislikeVideo("");
       setLike("");
       setDislike("");
       setStar("")

    console.warn(name, image, dob, pob, description, position, career, evaluate, prize, address, country, date, period, medal, honnors, url, imageVideo, likeVideo, disLikeVideo, like, dislike, star);
    let result = await fetch("https://fragile-fly-school-uniform.cyclic.app/api/history",{
      method:"post",
      body:JSON.stringify({name, image, dob, pob, description, position, career, evaluate, prize, address, country, date, period, medal, honnors, url, imageVideo, likeVideo, disLikeVideo, like, dislike, star}),
      headers:{
        "Content-Type":'application/json'
      }
    })
    result = await result.json();
    setEditable(false);
     }

    return(
        <form onSubmit={handleCreateForm} style={{background:"grey"}} className="admin-create-form">
            {!editable && <div style={{background:"white"}}>
                <UserAddOutlined onClick={()=>setEditable(true)} />
            </div>}
            {editable &&
            <div style={{margin:"0 6%", padding:"5%"}}>
            <div>
               
               <input type="text" placeholder="???nh" style={{width:"90%", height:"50px"}} onChange={(event)=>setImage(event.target.value)} />
            </div><br/>
            <div>
               
               <input type="text" placeholder="t??n" style={{width:"90%", height:"50px"}} onChange={(event)=>setName(event.target.value)} />
            </div><br/>
            <div>
               
               <input type="date" placeholder="ng??y sinh" style={{width:"90%", height:"50px"}} onChange={(event)=>setDob(event.target.value)}/>
            </div><br/>
            <div>
               
               <input type="text" placeholder="danh t??nh" style={{width:"90%", height:"50px"}} onChange={(event)=>setPob(event.target.value)}/>
            </div><br/>
            <div>
               
               <input type="text" placeholder="xu???t th??n" style={{width:"90%", height:"50px"}} onChange={(event)=>setDescription(event.target.value)}/>
            </div><br/>
            <div>
                
                <input type="text" placeholder="qu?? qu??n" style={{width:"90%", height:"50px"}} onChange={(event)=>setAddress(event.target.value)}/>
            </div><br/>
            <div>
              
               <input type="text" placeholder="qu???c gia" style={{width:"90%", height:"50px"}} onChange={(event)=>setCountry(event.target.value)}/>
            </div><br/>
            <div>
               
               <input type="text" placeholder="date" style={{width:"90%", height:"50px"}} onChange={(event)=>setDate(event.target.value)}/>
            </div><br/>
            <div>
               
               <input type="text" placeholder="ch???c v???" style={{width:"90%", height:"50px"}} onChange={(event)=>setPosition(event.target.value)}/>
            </div><br/>
            <div>
                
                <input type="text" placeholder="th???i k???" style={{width:"90%", height:"50px"}} onChange={(event)=>setPeriod(event.target.value)}/>
            </div><br/>
            <div>
                
                <input type="text" placeholder="chi???n t??ch" style={{width:"90%", height:"50px"}} onChange={(event)=>setCareer(event.target.value)}/>
            </div><br/>
            <div>
                
                <input type="text" placeholder="c???ng hi???n" style={{width:"90%", height:"50px"}} onChange={(event)=>setEvaluate(event.target.value)}/>
            </div><br/>
            <div>
                
                <input type="text" placeholder="vinh danh" style={{width:"90%", height:"50px"}} onChange={(event)=>setPrize(event.target.value)}/>
            </div><br/>
            <div>
               
               <input type="text" placeholder="honnors" style={{width:"90%", height:"50px"}} onChange={(event)=>setHonnors(event.target.value)}/>
            </div><br/>
            <div>
               
               <input type="text" placeholder="hu??n ch????ng" style={{width:"90%", height:"50px"}} onChange={(event)=>setMedal(event.target.value)}/>
            </div><br/>
            <div>
               
               <input type="text" placeholder="url" style={{width:"90%", height:"50px"}} onChange={(event)=>setUrl(event.target.value)}/>
            </div><br/>
            <div>
               
               <input type="text" placeholder="imageVideo" style={{width:"90%", height:"50px"}} onChange={(event)=>setImageVideo(event.target.value)}/>
            </div><br/>
            <div>
               
               <input type="text" placeholder="LikeVideo" style={{width:"90%", height:"50px"}} onChange={(event)=>setLikeVideo(event.target.value)}/>
            </div><br/>
            <div>
               
               <input type="text" placeholder="dislikeVideo" style={{width:"90%", height:"50px"}} onChange={(event)=>setDislikeVideo(event.target.value)}/>
            </div><br/>
            <div>
               
               <input type="text" placeholder="like" style={{width:"90%", height:"50px"}} onChange={(event)=>setLike(event.target.value)}/>
            </div><br/>
            <div>
               
               <input type="text" placeholder="dislike" style={{width:"90%", height:"50px"}} onChange={(event)=>setDislike(event.target.value)}/>
            </div><br/>
            <div>
               
               <input type="text" placeholder="star" style={{width:"90%", height:"50px"}} onChange={(event)=>setStar(event.target.value)}/>
            </div><br/>
            <div>
                <button  type="submit"><SaveOutlined /></button>
                <a type="button" onClick={()=>setEditable(false)}><FullscreenExitOutlined /></a>
            </div>
        </div>}
            
            
        </form>
    )
}
