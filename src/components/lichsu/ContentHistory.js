import React, { useState, useEffect } from "react";

import {Link,Outlet} from "react-router-dom"
import { Container,Row,Col } from "react-bootstrap";
import HistoryData from "../../data/HistoryData";
import ReactPlayer from 'react-player';
import axios from "axios";


export default function ContentHistory(){
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

    return(
        <div className="content-history">
          {isLoading ? <h1>Loading...</h1>:<div> 
             <h2>Danh sách các anh hùng vn</h2>
             
             <input type="text" placeholder="tìm kiếm" onChange={(event)=>setKeyword(event.target.value)} />
             <Container>
               <Row>
                   <Col>
                        <ul className="history-list" >
                            {result.map(history=><li key={history.id} >
                                <Link to={''+history._id}>
                                {history.name}
                                </Link>
                                
                            </li>
                            )}
                       </ul>
                   </Col>
                {/* <Col>
                    <Outlet />
                </Col> */}
               </Row>
           </Container>
          </div> }
        </div>
    )
}
