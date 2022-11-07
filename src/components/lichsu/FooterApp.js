import React, { useEffect, useState } from "react";
import CreateFooterForm from "./CreateFooterForm";
import FooterItem from "./FooterItem";
import axios from "axios";


export default function FooterApp(){
    const [data, setData]=useState([]);

    const CallApi = async()=>{
        
        
        await axios.get('https://fragile-fly-school-uniform.cyclic.app/api/comment')
        .then(function (response) {
          // handle success
          setData(response.data)
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
        
     }

     useEffect(()=>{
          CallApi();
     },[])
  
    const CreateFooter=(name,idea,opinion)=>{
        console.log("tạo một item"+name+idea+opinion);
        const newItem={
            id:Date.now(),
            name:name,
            idea:idea,
            opinion:opinion
        }
        const newData=[...data,newItem];
        setData(newData);
    }

    return(
        <div className="footer-app">
            <CreateFooterForm onCreateFooter={CreateFooter} />
            <div className="footerlist">
            {data.map(item=>{
                   return(
                     <FooterItem key={item._id}
                      id={item.id}
                       name={item.name}
                        idea={item.idea} 
                        opinion={item.opinion}
                         />
                   )
               })}
            </div>
            
        </div>
    )
}
