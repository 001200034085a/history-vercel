import React, { useState } from "react";
import { DislikeOutlined, LikeOutlined, MessageOutlined, StarOutlined } from '@ant-design/icons';
import { Avatar, List, Space } from 'antd';
import HistoryData from "../../data/HistoryData";
import ReactPlayer from 'react-player';


const IconText = ({ icon, text }) => (
    <Space>
      {React.createElement(icon)}
      {text}
    </Space>
  );


export default function ThongTin1({_id,url, name,image,dob,description,address,country,career,prize,evaluate,period,medal,position, like, dislike, data, setData}){
 
    

    
    return(
        // <div className="thong-tin1">
            
        //      <div className="thong-tin1a">
        //         <img src={image} />
        //         <div className="thong-tin1b">
        //             <b>Tên: {name}</b><br/>
        //             <a>ngày sinh: {dob}</a><br/>
        //             <c>Xuất thân: {description}</c><br/>
        //             <d>Quê quán: {address}</d><br/>
        //             <e>Quốc gia: {country}</e><br/>
        //             <a>Chức vụ: {position}</a>
        //         </div> 
        //      </div>
        //         <div className="thong-tin1d">
        //             <p>Thời kỳ: {period}</p>
        //             <f>Chiến tích: {career}</f><br/><br/>
        //             <h>Cống Hiến: {evaluate}</h><br/><br/>
        //         </div>
              
        //       <div className="thong-tin1c">
        //         <g>Vinh danh: {prize}</g><br/><br/>  
        //         <b>Huân Chương:{medal}</b><br/><br/>
                
        //       </div>
            
        // </div>

        <div>
                <List.Item
                    
                    actions={[
                        // <IconText icon={StarOutlined} text="156" key="list-vertical-star-o" />,
    
                        // <IconText icon={MessageOutlined} text="2" key="list-vertical-message" />,
                    ]}
                    extra={
                        // <img
                        //    width={272}
                        //    alt="logo"
                        //    src={image}
                        // />
                        <ReactPlayer url={url} controls={true} light={true} width={350} />
                        
                    }
                    >
                    <List.Item.Meta
                    avatar={<Avatar src={image} />}
                    title={<a href="href">{name}</a>}
                    // description={item.description}
                    />
                    Năm sinh : {dob}<br/>
                    Xuất sứ : {address}<br/>
                    Triều đại : {country}<br/>
                    Tước hiệu : {position}<br/>
                    Xuất thân : {description}<br/>
                    Thời kỳ : {period}<br/>
                    Chiến tích : {career}<br/>
                    Vinh danh : {prize}<br/>
                    Cống Hiến : {evaluate}<br/>
                    Huân Chương : {medal}<br/><br/>                  
                </List.Item> 
        </div>
    )
}