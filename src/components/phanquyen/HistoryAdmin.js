import React, { useState, useEffect } from "react";
import HistoryData from "../../data/HistoryData";
import AdminCreateForm from "./AdminCreateForm";
import AdminItem from "./AdminItem";
import { DislikeOutlined, LikeOutlined, MessageOutlined, StarOutlined } from '@ant-design/icons';
import { Avatar, List, Space } from 'antd';
import {
    DeleteOutlined ,
    EditOutlined ,
    SaveOutlined 
 } from "@ant-design/icons";
import FooterHistory from "../lichsu/FooterHistory";
import FooterApp from "../lichsu/FooterApp";
import axios from "axios";


const IconText = ({ icon, text }) => (
    <Space>
      {React.createElement(icon)}
      {text}
    </Space>
  );


export default function HistoryAdmin(){
    
    const [keyword, setKeyword]=useState('');
    const [data, setData]=useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const CallApi = async()=>{
        setIsLoading(true);

       await axios.get('https://good-eel-visor.cyclic.app/api/history')
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

    
  
    
    const editItem=(itemId,newImage,newName,newDob,newDescription,newAddress,newCountry,newPosition,newPeriod,newCareer,newEvaluate,newPrize,newMedal)=>{
        const newData=[...data];
        for(let item of data){
            if(item._id==itemId){
                item.image=newImage
                item.name=newName
                item.dob=newDob
                item.description=newDescription
                item.address=newAddress
                item.country=newCountry
                item.position=newPosition
                item.period=newPeriod
                item.career=newCareer
                item.evaluate=newEvaluate
                item.prize=newPrize
                item.medal=newMedal
            }
        }
        setData(newData);
    }

    // const deleteItem =async(itemId)=>{
    //    console.log("xóa một item"+itemId);
    //    const remove=[...data].filter(item=>{
    //        return item._id !=itemId
    //    })
    //    setData(remove)
    // };

    const CreateForm=(image,name,dob,description,address,country,position,period,career,evaluate,prize,medal)=>{
        const NewItem={
            _id: Date.now(),
            image:image,
            name:name,
            dob:dob,
            description:description,
            address:address,
            country:country,
            position:position,
            period:period,
            career:career,
            evaluate:evaluate,
            prize:prize,
            medal:medal
        }
        const newData=[...data,NewItem];
        setData(newData);
    };

    const result=data.filter(item=>item.name.toLowerCase().indexOf(keyword.toLowerCase())>-1);

    return(
      <div> 
        {isLoading ? <h1>Loading...</h1>:
        <div className="History-admin">
           <AdminCreateForm onCreateForm={CreateForm}  data={data} />
           
           {/* <div className="admin-list">
           <input type="text" placeholder="tìm kiếm" onChange={(event)=>setKeyword(event.target.value)} />
                 {result.map(item=>{
                     return(
                         <AdminItem key={item.id}
                         id={item.id}
                         image={item.image}
                         name={item.name}
                         dob={item.dob}
                         description={item.description}
                         address={item.address}
                         country={item.country}
                         position={item.position}
                         period={item.period}
                         career={item.career}
                         evaluate={item.evaluate}
                         prize={item.prize}
                         medal={item.medal}
                         onDeleteItem={deleteItem}
                         onEditItem={editItem}
                          />
                     )
                 })}
           </div> */}


             <List
                itemLayout="vertical"
                size="large"
                pagination={{
                onChange: (page) => {
                    console.log(page);
                },
                pageSize: 3,
               }}
                dataSource={result}
                footer={
                <div>
                    <b>ant design</b>
                </div>
                }
                renderItem={(item) => (
                    
                    <AdminItem key={item._id}
                         _id={item._id}
                         image={item.image}
                         name={item.name}
                         dob={item.dob}
                         pod={item.pob}
                         description={item.description}
                         address={item.address}
                         country={item.country}
                         date={item.date}
                         position={item.position}
                         period={item.period}
                         career={item.career}
                         evaluate={item.evaluate}
                         prize={item.prize}
                         medal={item.medal}
                         honnors={item.honnors}
                         url={item.url}
                         imageVideo={item.imageVideo}
                         likeVideo={item.likeVideo}
                         disLikeVideo={item.disLikeVideo}
                         like={item.like}
                         dislike={item.dislike}
                         star={item.star}
                         onEditItem={editItem}
                        //  onDeleteItem={deleteItem}
                         data={data}
                         setData={setData}
                          />
                )}
            />

           <FooterApp />
           <FooterHistory />
        </div>}
      </div>   
    )
}
