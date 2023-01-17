import React, { useState, useEffect } from 'react';
import HistoryData from '../../data/HistoryData';
import ThongTin1 from './ThongTin1';
import { DislikeOutlined, LikeOutlined, MessageOutlined, StarOutlined } from '@ant-design/icons';
import { Avatar, Input, List, Space } from 'antd';
import FooterHistory from './FooterHistory';
import FooterApp from './FooterApp';
import axios from 'axios';
import ReactPlayer from 'react-player';



const IconText = ({ icon, text }) => (
    <Space>
      {React.createElement(icon)}
      {text}
    </Space>
  );



const ThongTin = ({currentUser}) => {

    const [data, setData]=useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [keyword, setKeyword]=useState('');

    const result=data.filter(item=>item.name.toLowerCase().indexOf(keyword.toLowerCase())>-1);

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
        <div className='thong-tin' >
            <h2> Thông Tin Các Anh Hùng</h2>
            <Input type="text" style={{ width:"50%", marginLeft:'25%'}}  placeholder="tìm kiếm video" onChange={(event)=>setKeyword(event.target.value)} />
            {isLoading && <h1>Loading...</h1>}
            {/* {result.map(item=>{
                return(
                    <ThongTin1 key={item.id}
                    id={item.id} 
                    image={item.image}
                    name={item.name}
                    dob={item.dob}
                    position={item.position}
                    description={item.description}
                    address={item.address}
                    country={item.country}
                    period={item.period}
                    career={item.career}
                    prize={item.prize}
                    evaluate={item.evaluate}
                    medal={item.medal}
                    
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
                pageSize: 3,
               }}
                dataSource={result}
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
                        // <IconText icon={StarOutlined} text="156" key="list-vertical-star-o" />,
                        // <a style={{color:"black"}} onClick={()=>onLike(item._id)} ><IconText icon={LikeOutlined}   key="list-vertical-like-o" />{item.like}</a>,
                        // <a style={{color:"black"}} onClick={()=>onDislike(item.id)} ><IconText icon={DislikeOutlined}   key="list-vertical-like-o" />{item.dislike}</a>,
                        // <IconText icon={MessageOutlined} text="2" key="list-vertical-message" />,
                    ]}
                    extra={
                        // <img
                        //    width={272}
                        //    alt="logo"
                        //    src={item.image}
                        // />
                        <ReactPlayer url={item.url} controls={true} light={true} width={350} />
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
                    Tước hiệu : {item.position}<br/>
                    Xuất thân : {item.description}<br/>
                    Thời kỳ : {item.period}<br/>
                    Chiến tích : {item.career}<br/>
                    Vinh danh : {item.prize}<br/>
                    Cống Hiến : {item.evaluate}<br/>
                    Huân Chương : {item.medal}<br/><br/>
                    </List.Item> 

                    // <ThongTin1 key={item.id}
                    // id={item._id} 
                    // image={item.image}
                    // url={item.url}
                    // name={item.name}
                    // dob={item.dob}
                    // position={item.position}
                    // description={item.description}
                    // address={item.address}
                    // country={item.country}
                    // period={item.period}
                    // career={item.career}
                    // prize={item.prize}
                    // evaluate={item.evaluate}
                    // medal={item.medal}
                    // like={item.like}
                    // dislike={item.dislike}
                    // setData={setData}
                    // data={data}
                    //     />
                )}
            />
            <FooterApp/>
            <FooterHistory />
        </div>
    );
};

export default ThongTin; 
