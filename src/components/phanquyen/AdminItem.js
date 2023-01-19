import React, { useEffect, useState } from "react";
import { Avatar, List, Space } from 'antd';
import {
    DeleteOutlined ,
    EditOutlined ,
    SaveOutlined 
 } from "@ant-design/icons";



const IconText = ({ icon, text }) => (
    <Space>
      {React.createElement(icon)}
      {text}
    </Space>
  );

  

export default function AdminItem({_id,name,image,dob,pob,description,address,country,date,career,prize,evaluate,period,medal,position,honnors,url,imageVideo,likeVideo,dislikeVideo,like, dislike, star,data,setData,onEditItem}){
    const [editing,setEditing]=useState(false);
    
    const [newImage, setNewImage]=useState('');
    const [newName, setNewName]=useState('');
    const [newDob, setNewDob]=useState('');
    const [newPob, setNewPob] = useState("");
    const [newDescription, setNewDescription]=useState('');
    const [newAddress, setNewAddress]=useState('');
    const [newCountry, setNewCountry]=useState('');
    const [newDate, setNewDate] = useState("");
    const [newPosition, setNewPosition]=useState('');
    const [newPeriod, setNewPeriod]=useState('');
    const [newCareer, setNewCareer]=useState('');
    const [newEvaluate, setNewEvaluate]=useState('');
    const [newPrize, setNewPrize]=useState('');
    const [newMedal, setNewMedal]=useState('');
    const [newHonnors, setNewHonnors] = useState("");
    const [newUrl, setNewUrl] = useState("");
    const [newImageVideo, setNewImageVideo] = useState("");
    const [newLikeVideo, setNewLikeVideo] = useState("");
    const [newDisLikeVideo, setNewDisLikeVideo] = useState("");
    const [newLike, setNewLike] = useState("");
    const [newDislike, setNewDislike]= useState("");
    const [newStar, setNewStar] = useState("");

    const anebleEdit =()=>{
        console.log("chuyển dữ liệu sang")
        setEditing(true);
    }
    const edit = async()=>{
        setEditing(false);
        onEditItem(_id,newImage,newName,newDob,newPob,newDescription,newAddress,newCountry,newDate,newPosition,newPeriod,newCareer,newEvaluate,newPrize,newMedal,newHonnors,newUrl,newImageVideo,newLikeVideo,newDisLikeVideo,newLike,newDislike,newStar);
        setNewImage('');
        setNewName('');
        setNewDob('');
        setNewPob('');
        setNewDescription('');
        setNewAddress('');
        setNewCountry('');
        setNewPosition('');
        setNewPeriod('');
        setNewCareer('');
        setNewEvaluate('');
        setNewPrize('');
        setNewMedal('');

        console.warn(newImage,newName,newDob,newPob,newDescription,newAddress,newCountry,newDate,newPosition,newPeriod,newCareer,newEvaluate,newPrize,newMedal,newHonnors,newUrl,newImageVideo,newLikeVideo,newDisLikeVideo,newLike,newDislike,newStar);
    let result = await fetch(`https://good-eel-visor.cyclic.app/api/history/${_id}`,{
      method:"put",
      body:JSON.stringify({image:newImage, name:newName, dob:newDob, pob:newPob, description:newDescription, address:newAddress, country:newCountry, date:newDate, position:newPosition, period:newPeriod, career:newCareer, evaluate:newEvaluate, prize:newPrize, medal:newMedal, honnors:newHonnors, url:newUrl, imageVideo:newImageVideo, likeVideo:newLikeVideo, dislikeVideo:newDisLikeVideo, like:newLike, dislike:newDislike, star:newStar}),
      headers:{
        "Content-Type":'application/json'
      }
    })
    result = await result.json();
    }

    
    const onDeleteItem = async(itemId)=>{
        const remove=[...data].filter(item=>{
           return item._id !=itemId
       })
       setData(remove);
        let result = await fetch(`https://good-eel-visor.cyclic.app/api/history/${_id}`,{
        method:"delete",
        headers:{
            "Content-Type":'application/json'
           }
        })
        result = await result.json();
        
    }

    

    return(
        // <div className="admin-item">
        //    <div className="thong-tin1">
            
        //     <div className="thong-tin1a">
        //        {editing ? <input type="text" placeholder="ảnh" defaultValue={image} onChange={(event)=>setNewImage(event.target.value)}/>: <img src={image} />}
        //        <div className="thong-tin1b">
        //           {editing ? <input type="text" placeholder="tên" defaultValue={name} onChange={(event)=>setNewName(event.target.value)} />:<b>Tên:{name}</b>}<br/> 
        //           {editing ? <input type="date" placeholder="ngày sinh" defaultValue={dob} onChange={(event)=>setNewDob(event.target.value)} />:<a>ngày sinh:{dob}</a>} <br/>
        //           {editing ? <input type="text" placeholder="xuất thân" defaultValue={description} onChange={(event)=>setNewDescription(event.target.value)}  />:<c>Xuất thân: {description}</c>} <br/>
        //           {editing ? <input type="text" placeholder="quê quán" defaultValue={address} onChange={(event)=>setNewAddress(event.target.value)} />:<d>Quê quán: {address}</d>} <br/>
        //           {editing ? <input type="text" placeholder="quốc gia" defaultValue={country} onChange={(event)=>setNewCountry(event.target.value)}  />:<e>Quốc gia: {country}</e>} <br/>
        //           {editing ? <input type="text" placeholder="chức vụ" defaultValue={position} onChange={(event)=>setNewPosition(event.target.value)} />:<a>Chức vụ: {position}</a>} 
        //        </div> 
        //     </div>
        //        <div className="thong-tin1d">
        //           {editing ? <input type="text" placeholder="thời kỳ" defaultValue={period} onChange={(event)=>setNewPeriod(event.target.value)} />:<p>Thời kỳ: {period}</p>} 
        //           {editing ? <input type="text" placeholder="chiến tích" defaultValue={career} onChange={(event)=>setNewCareer(event.target.value)} />:<f>Chiến tích: {career}</f>} <br/><br/>
        //           {editing ? <input type="text" placeholder="cống hiến" defaultValue={evaluate} onChange={(event)=>setNewEvaluate(event.target.value)}  />:<h>Cống Hiến: {evaluate}</h>} <br/><br/>
        //        </div>
             
        //      <div className="thong-tin1c">
        //        {editing ? <input type="text" placeholder="xinh danh" defaultValue={prize} onChange={(event)=>setNewPrize(event.target.value)} />:<g>Vinh danh: {prize}</g>} <br/><br/>  
        //        {editing ? <input type="text" placeholder="huân chương" defaultValue={medal} onChange={(event)=>setNewMedal(event.target.value)} />:<b>Huân Chương:{medal}</b>}<br/><br/>
               
        //      </div>
        //      {editing? <button onClick={edit}>lưu</button>:<button onClick={anebleEdit}>sửa</button>} 
        //      <button onClick={(event)=>onDeleteItem(id)} >xóa</button>
        //   </div>
        // </div>

        <div>
            <List.Item
                   
                    actions={[
                        // <IconText icon={StarOutlined} text="156" key="list-vertical-star-o" />,
                        // <a style={{color:"black"}} onClick={()=>onLike(item.id)} ><IconText icon={LikeOutlined}   key="list-vertical-like-o" />{item.like}</a>,
                        // <a style={{color:"black"}} onClick={()=>onDislike(item.id)} ><IconText icon={DislikeOutlined}   key="list-vertical-like-o" />{item.dislike}</a>,
                        // <IconText icon={MessageOutlined} text="2" key="list-vertical-message" />,
                    ]}
                    extra={
                        editing ? <img src={setNewImage} />:<img
                           width={272}
                           alt="logo"
                           src={image}
                        />
                    }
                    >
                    <List.Item.Meta
                    avatar={editing ? <input type="text" placeholder="ảnh" onChange={(event)=>setNewImage(event.target.value)} />:<Avatar src={image} />}
                    title={editing ? <input type="text" placeholder={name}  onChange={(event)=>setNewName(event.target.value)} />:<a href="href">{name}</a>}
                    // description={item.description}
                    />
                    {editing ? <input type="date" placeholder="ngày sinh"  onChange={(event)=>setNewDob(event.target.value)} />:<div>Năm sinh : {dob}</div>}<br/>
                    {editing ? <input type="text" placeholder="pob" onChange={(event)=>setNewPob(event.target.value)} />:<div></div>}
                    {editing ? <input type="text" placeholder="xuất sứ" onChange={(event)=>setNewAddress(event.target.value)} />:<div>Xuất sứ : {address}</div>}<br/>
                    {editing ? <input type="text" placeholder="Triều đại" onChange={(event)=>setNewCountry(event.target.value)} />:<div>Triều đại : {country}</div>}<br/>
                    {editing ? <input type="text" placeholder="date" onChange={(event)=>setNewDate(event.target.value)} />:<div></div>}
                    {editing ? <input type="text" placeholder="Tước hiệu" onChange={(event)=>setNewPosition(event.target.value)} />:<div>Tước hiệu : {position}</div>}<br/>
                    {editing ? <input type="text" placeholder="Xuất Thân" onChange={(event)=>setNewDescription(event.target.value)} />:<div>Xuất thân : {description}</div>}<br/>
                    {editing ? <input type="text" placeholder="Thời kỳ" onChange={(event)=>setNewPeriod(event.target.value)} />:<div>Thời kỳ : {period}</div>}<br/>
                    {editing ? <input type="text" placeholder="Chiến tích" onChange={(event)=>setNewCareer(event.target.value)} />:<div>Chiến tích : {career}</div>}<br/>
                    {editing ? <input type="text" placeholder="Vinh danh" onChange={(event)=>setNewPrize(event.target.value)} />:<div>Vinh danh : {prize}</div>}<br/>
                    {editing ? <input type="text" placeholder="Cống hiến" onChange={(event)=>setNewEvaluate(event.target.value)} />:<div>Cống Hiến : {evaluate}</div>}<br/>
                    {editing ? <input type="text" placeholder="Huân chương" onChange={(event)=>setNewMedal(event.target.value)} />:<div>Huân Chương : {medal}</div>}<br/><br/>
                    {editing ? <input type="text" placeholder="Honnors" onChange={(event)=>setNewHonnors(event.target.value)} />:<div></div>}
                    {editing ? <input type="text" placeholder="url" onChange={(event)=>setNewUrl(event.target.value)} />:<div></div>}
                    {editing ? <input type="text" placeholder="imageVideo" onChange={(event)=>setNewImageVideo(event.target.value)} />:<div></div>}
                    {editing ? <input type="text" placeholder="likeVideo" onChange={(event)=>setNewLikeVideo(event.target.value)} />:<div></div>}
                    {editing ? <input type="text" placeholder="disLikeVideo" onChange={(event)=>setNewDisLikeVideo(event.target.value)} />:<div></div>}
                    {editing ? <input type="text" placeholder="like" onChange={(event)=>setNewLike(event.target.value)} />:<div></div>}
                    {editing ? <input type="text" placeholder="disLike" onChange={(event)=>setNewDislike(event.target.value)} />:<div></div>}
                    {editing ? <input type="text" placeholder="star" onChange={(event)=>setNewStar(event.target.value)} />:<div></div>}
                    <DeleteOutlined style={{ fontSize: '20px' }} onClick={(event)=>onDeleteItem(_id)} />
                    {editing? <SaveOutlined style={{ fontSize: '20px' }} onClick={edit} />:<EditOutlined style={{ fontSize: '20px' }} onClick={anebleEdit}/>} 
                    </List.Item>
        </div>
    )
}
