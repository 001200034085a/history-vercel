import React, { useState, useEffect } from "react";
import ReactPlayer from 'react-player';
import { DislikeOutlined, LikeOutlined } from '@ant-design/icons';
import { List } from 'antd';
import {useParams} from "react-router-dom";
import HistoryData from "../../data/HistoryData";
import axios from "axios";



// id,name,url,likeVideo,disLikeVideo,data,setData

export default function VideoItem({ }){
    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);
    const [data, setData]=useState([]);

    const CallApi = async()=>{
        
        
       await axios.get('https://fragile-fly-school-uniform.cyclic.app/api/history')
       .then(function (response) {
         // handle success
         console.log(response.data);
         setData(response.data)
       })
       .catch(function (error) {
         // handle error
         console.log(error);
       });

       
    }

    useEffect(()=>{
       CallApi();
    },[]);
    

    const {_id}=useParams();

    const found = data.find((item)=>_id == item._id);

    const onLikeVideo = (itemId)=>{
        const newItem = [...data];
        for(let item of data){
            if(item._id === itemId){
                if(!show){
                    if(show2){
                        item.likeVideo = item.likeVideo +1;
                        item.disLikeVideo = item.disLikeVideo -1;
                        setShow2(false);
                    }
                    else{
                        item.likeVideo = item.likeVideo +1;
                    }
                }
                else{
                    item.likeVideo = item.likeVideo -1;
                }
            }
        }
        setShow(!show);
        setData(newItem);
    };
    const onDisLikeVideo = (itemId)=>{
        const newItem = [...data];
        for(let item of data){
            if(item._id === itemId){
                if(!show2){
                    if(show){
                        item.disLikeVideo = item.disLikeVideo +1;
                        item.likeVideo = item.likeVideo -1;
                        setShow(false);
                    }
                    else{
                        item.disLikeVideo = item.disLikeVideo +1
                    }
                }
                else{
                    item.disLikeVideo = item.disLikeVideo -1;
                }
            }
        }
        setShow2(!show2);
        setData(newItem);
    }

    return(
        <div  style={{ margin:"1%"}}>
            {found && 
            <div>
               <div><ReactPlayer url={found.url} controls={true} light={true} width={"100%"} /></div>
               <h1 style={{color:"grey"}}>{found.name}</h1>
               <a style={{color: !show ? "grey":"blue"}} onClick={()=>onLikeVideo(_id)}><LikeOutlined style={{ fontSize: '30px' }} />{found.likeVideo}</a>&nbsp;&nbsp;
               <a style={{color: !show2 ? "grey":"red"}} onClick={()=>onDisLikeVideo(_id)}><DislikeOutlined style={{ fontSize: '30px' }} />{found.disLikeVideo}</a> 
            </div> 
            }
            
        </div>
        
    )
}
