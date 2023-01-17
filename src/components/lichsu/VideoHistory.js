import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import HistoryData from '../../data/HistoryData';
import VideoItem from './VideoItem';
import {Link, Outlet} from "react-router-dom";
import axios from 'axios';
import { Input } from 'antd';




export default function VideoHistory (){
    const [data, setData]=useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [keyword, setKeyword]=useState('');

    const CallApi = async()=>{
        setIsLoading(true);
        
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

       setIsLoading(false);
    }

    useEffect(()=>{
       CallApi();
  
    },[]);

    

    const result=data.filter(item=>item.name.toLowerCase().indexOf(keyword.toLowerCase())>-1);


    return(
        <div>
        {isLoading ? <h1>Loading...</h1>:
        <div>
            {/* <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' controls={true} light={true} />
            <ReactPlayer url='https://www.youtube.com/watch?v=uaN1fwR_CRk' controls={true} light={true} /> */}
            <br/>
            <hr style={{width:"90%", margin:"auto"}}/>
            <br/>
            <Input type="text" style={{ width:"50%", marginLeft:'25%'}}  placeholder="tìm kiếm video" onChange={(event)=>setKeyword(event.target.value)} />
            
            <div style={{display:"flex", flexWrap:"wrap"}} className="video-history" >
               
                {result.map(item=>{
                return(
                    <Link key={item._id} style={{margin:"1%"}} to={''+item._id}>    
                    {/* <VideoItem
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    url={item.url}
                    likeVideo={item.likeVideo}
                    disLikeVideo={item.disLikeVideo}
                    data={data}
                    setData={setData}
                     /> */}
                     <img src={item.imageVideo} width={"400px"} height={"250px"} style={{margin:"1%",borderRadius:"5px"}} />
                     <h1 style={{color:"grey"}}>{item.name}</h1>
                     </Link>            
                )
                })}

            </div>
            
        </div>}
        </div>
    )
    
}
