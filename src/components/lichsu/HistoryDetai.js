import React, { useState, useEffect } from "react";
import axios  from "axios";
import {useParams} from "react-router-dom";
import HistoryData from "../../data/HistoryData";


export default function HistoryDetai(){
    const [data, setData] = useState([]);
    const {_id}=useParams();
    const [loading, setLoading] = useState(false);
    

    const CallApi = async()=>{
        setLoading(true);
        
       await axios.get('https://good-eel-visor.cyclic.app/api/history')
       .then(function (response) {
         // handle success
         console.log(response.data);
         setData(response.data);
         setLoading(false);
       })
       .catch(function (error) {
         // handle error
         console.log(error);
         setLoading(true);
       });

      
    }

    useEffect(()=>{
       CallApi();
  
    },[]);

    const found = data.find((product)=>_id==product._id);
    console.log(found);
   
    return(
       
        <div className="history-detai"> 
            {(found)&&
                <div>
                    <h2>Chi tiết các anh hùng</h2>
                    <img src={found.image} /><br/>
                    <b>Tên:{found.name}</b><br/>
                    <b>Quê quán:{found.pob}</b><br/>
                    <b>Ngày sinh:{found.dob}</b><br/><br/>
                    <b>Xuất thân:{found.description}</b><br/><br/>
                    <b>Thời kỳ: {found.period}</b>
                    <b>Sự nghiệp:{found.career}</b><br/><br/>
                    <b>Thành tựu:{found.prize}</b><br/><br/>
                    <b>Huân Chương:{found.medal}</b><br/><br/> 
                    <b>Vinh danh:{found.honnors}</b><br/><br/>
                </div>
            }
            {(!found && !loading ) && <h2 className="text-danger">không tìm thấy giữ liệu</h2>}
        </div>
    )
}
