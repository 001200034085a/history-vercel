import React, { useEffect, useState } from "react";
import HistoryData from "../../data/HistoryData";
import ContentItem from "./ContentItem";
import axios from "axios";

export default function ContentHistoryList(){
    const [data, setData]=useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const CallApi = async()=>{
        setIsLoading(true);

       await axios.get('https://history-api-production.up.railway.app/api/history')
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
        <div className="content-history-list">
            {isLoading ? <h1></h1>:
            <div>
              <hr style={{width:"90%", margin:"auto"}}/>  
              <h2>Một số hình ảnh</h2>
              
              <div className="list-history">
                  {data.map(history=>{
                    return(
                      <ContentItem key={history._id}
                      image={history.image}
                      name={history.name}
                      address={history.address}
                      country={history.country} />
                   )
              })}
              </div>
            </div>} 
        </div>
    )
}