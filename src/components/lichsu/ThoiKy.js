import React, { useState, useEffect } from 'react';
import { Avatar, List, Space } from 'antd';
import { DislikeOutlined, LikeOutlined, MessageOutlined, StarOutlined } from '@ant-design/icons';
import HistoryData from '../../data/HistoryData';
import Thoiky1 from './Thoiky1';
import FooterHistory from './FooterHistory';
import FooterApp from './FooterApp';
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
   const [filterYear, setFilterYear]=useState(140);
   const [plus, setPlus] =useState(false);

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

   const result=data.filter(item=>{
    let date =new Date(item.date);
    return filterYear == date.getFullYear();
    });

    const onStar = async(itemId)=>{
        const newItem = [...data];
        for(let item of data){
            if(item._id === itemId){
                if(!plus){
                    item.star = item.star + 1;

                    let result = await fetch(`https://good-eel-visor.cyclic.app/api/history/${item._id}`,{
                        method:"put",
                        body:JSON.stringify({star:item.star}),
                        headers:{
                            "Content-Type":'application/json'
                        }
                    })
                    result = await result.json();
                }
                else{
                    item.star = item.star - 1;

                    let result = await fetch(`https://good-eel-visor.cyclic.app/api/history/${item._id}`,{
                        method:"put",
                        body:JSON.stringify({star:item.star}),
                        headers:{
                            "Content-Type":'application/json'
                        }
                    })
                    result = await result.json();
                }  

            }

        }
        setPlus(!plus);
        setData(newItem);
    
    };


    return (
        <div className='thoi-ky' >
            <div>
                <select value={filterYear} onChange={(event)=>setFilterYear(event.target.value)} >
                    <option>700</option>
                    <option>140</option>
                    <option>503</option>
                    <option>866</option>
                    <option>924</option>
                    <option>941</option>
                    <option>974</option>
                    <option>1019</option>
                    <option>1258</option>
                    <option>1231</option>
                    <option>1385</option>
                    <option>1380</option>
                    <option>1753</option>
                    <option>1890</option>
                    <option>1911</option>
                    <option>1922</option>
                    <option>1924</option>
                </select>
            </div>
            {isLoading && <div className='center'>
          <div className='ring'></div>
          <span>Loading...</span>
        </div>}
            <div >

                {/* {result.map(item=>{
                  return(
                    <Thoiky1 key={item.id}
                    image={item.image}
                    name={item.name}
                    date={item.date}
                    period={item.period}
                     />
                  )
               })} */}

            <List
                itemLayout="vertical"
                size="large"
                pagination={{
                onChange: (page) => {
                    console.log(page);
                },
                pageSize: 1,
               }}
                dataSource={result}
                footer={
                <div>
                    <b>ant design</b>
                </div>
                }
                renderItem={(item) => (
                    <List.Item
                    key={item._id}
                    id={item._id}
                    actions={[
                        <a style={!plus ? {color:"blue"}:{color:"red"} } onClick={()=>onStar(item._id)} ><IconText icon={StarOutlined}  key="list-vertical-star-o" />{item.star}</a>,
                        // <button onClick={()=>onLike(item.id)} ><IconText icon={LikeOutlined}   key="list-vertical-like-o" />{item.like}</button>,
                        // <button onClick={()=>onDislike(item.id)} ><IconText icon={DislikeOutlined}   key="list-vertical-like-o" />{item.dislike}</button>,
                        // <IconText icon={MessageOutlined} text="2" key="list-vertical-message" />,
                    ]}
                    extra={
                        <img
                           width={272}
                           alt="logo"
                           src={item.image}
                        />
                    }
                    >
                    <List.Item.Meta
                    avatar={<Avatar src={item.image} />}
                    title={<a href={item.href}>{item.name}</a>}
                    // description={item.description}
                    />
                    Năm sinh : {item.dob}<br/>
                    Xuất sứ : {item.address}<br/>
                    Triều đại : {item.country}<br/>
                    Thời kỳ : {item.period}<br/>
                    </List.Item> 
                )}
            />
            </div>
            <FooterApp/>
            <FooterHistory />
        </div>
    );
};

export default ThongTin; 
