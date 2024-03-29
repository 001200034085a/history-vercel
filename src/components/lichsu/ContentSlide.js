import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y,  EffectCoverflow } from 'swiper';
import axios from "axios";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


export default function ContentSlide(){
    const [data, setData] = useState([]);
    const CallApi = async()=>{
        await axios.get("https://good-eel-visor.cyclic.app/api/history").then((response)=>{
            setData(response.data);
        })
    }

    useEffect(()=>{
        CallApi();
    });

    return(
        <Swiper
        className="slide-image"
        effect="coverflow"
        modules={[Navigation, Pagination, Scrollbar, A11y, EffectCoverflow]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {data.map((item)=>{
        return(
            <SwiperSlide key={item._id} >
                <img  src={item.image} />
            </SwiperSlide>
        )
      })}
    </Swiper>
    )
}
