import React, { useState, useEffect } from "react";
import HistoryData from "../../data/HistoryData";
import { Avatar, List, Space } from 'antd';
import { StarOutlined } from '@ant-design/icons';
import ChienTich1 from "./ChienTich1";
import FooterHistory from "./FooterHistory";
import FooterApp from "./FooterApp";
import axios from "axios";

const IconText = ({ icon, text }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);

const ThongTin = () => {
  const [data, setData]=useState([]);
  const [isLoading, setIsLoading] = useState(false);

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

  
  return (
    <div >
      {/* {data.map(item=>{
        return(
          <ChienTich1 key={item.id}
          name={item.name}
          career={item.career}
          evaluate={item.evaluate}
           />
        )
      })} */}
      {isLoading && <h1>Loading...</h1>}
       <List
            itemLayout="vertical"
            size="large"
            pagination={{
            onChange: (page) => {
                console.log(page);
            },
              pageSize: 3,
            }}
              dataSource={data}
              footer={
              <div>
                <b>ant design</b>
              </div>
              }
              renderItem={(item) => (
                  <List.Item
                    key={item.id}
                    id={item.id}
                    actions={[
                        // <a  onClick={()=>onStar(item.id)} ><IconText icon={StarOutlined}  key="list-vertical-star-o" />{item.star}</a>,
                        // <button onClick={()=>onLike(item.id)} ><IconText icon={LikeOutlined}   key="list-vertical-like-o" />{item.like}</button>,
                        // <button onClick={()=>onDislike(item.id)} ><IconText icon={DislikeOutlined}   key="list-vertical-like-o" />{item.dislike}</button>,
                        // <IconText icon={MessageOutlined} text="2" key="list-vertical-message" />,
                    ]}
                    // extra={
                    //     <img
                    //        width={272}
                    //        alt="logo"
                    //        src={item.image}
                    //     />
                    // }
                    >
                    <List.Item.Meta
                    avatar={<Avatar src={item.image} />}
                    title={<a href={item.href}>{item.name}</a>}
                    // description={item.description}
                    />
                    Chiến Tích: {item.career}<br/><br/>
                    Cống Hiến: {item.evaluate}
                  </List.Item> 
                )}
        />
        <FooterApp/>
        <FooterHistory />
    </div>
  );
};

export default ThongTin;
