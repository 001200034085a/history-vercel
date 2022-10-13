import React, { useEffect, useState } from "react";

export default function ContentSlide(){
    const Slideshow =({imgs})=>{
        const [index, setIndex]=useState(0);
        const Thumbnail=({arr,image,index})=>{
            return <div className="thumbnai">
                {
                arr.map((imgsrc, i)=>(
                <img key={i} 
                height="50" 
                src={imgsrc} 
                onClick={()=>image(i)}
                className={index===i ? 'active':'' }
                />)
                )}
            </div>
        }
        
        useEffect(()=>{
          setIndex(0);
          
        },[]);

        const next=()=>{
          if(index===imgs.length-1){
              setIndex(0)
          }
          else{
              setIndex(index+1)
          }
        }

        const prev=()=>{
          if(index===0){
              setIndex(imgs.length-1)
          }
          else{
              setIndex(index-1)
          }
        }

       return<div className="slideshow">
           <img className="mainImg" src={imgs[index]}/>
           <div className="actions">
                <a onClick={prev}>⏮️</a>&nbsp;&nbsp;
                <a onClick={next}>⏭️</a>
                
           </div>
           <div className="thumbnail1">
               <Thumbnail arr={imgs} image={setIndex} index={index} />
           </div>
           
       </div>
    }
    return(
        <div className="content-slide">
            
            <Slideshow 
            imgs={["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS47IDqu7bNfWWH9v98SC_ipIiMD0oJLv9f-lHgf_gI9etvlk_98zGKh-vGnebASMfRe4g&usqp=CAU",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcM-YNVOUKGK1fYBld8o_GfJbncwhro8D0qkd51_x2plMWmXU8Xr7YWZ0pWfqsQmM-fBU&usqp=CAU",
            "https://toplist.vn/images/800px/hai-ba-trung-19268.jpg",
            "https://danviet.mediacdn.vn/upload/3-2017/images/2017-09-16/150549542410144-509.jpg",
            "https://media.phapluatplus.vn/resize/410x232/files/news/2017/01/27/nhung-nam-dau-ghi-dau-moc-lich-su-ve-vang-dan-toc-viet-nam-225108.jpg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiUvL4T2z-J3LeeUJY_GZTXamWXQHpN6UykaC3gTogXSWhFcXp21E6c-Vc0MbPqO8FD9w&usqp=CAU"
        ]}
            />
        </div>
    )
}