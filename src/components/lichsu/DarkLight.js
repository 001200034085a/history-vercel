import React, { useState } from "react";
import ContentSlide from "./ContentSlide";
import ContentHistoryList from "./ContentHistoryList";
import QuestionApp from "./QuestionApp";
import VideoHistory from "./VideoHistory";
// import ContentApp from "./ContentApp";


export default function DarkLight(){
    const [darkMode, setDarkMode]=useState(false)
    return(
        <div className={darkMode ? "dark-mode":"light-mode"}>
           <div className="checkbox">
               <span style={{color: darkMode? "grey":"yellow"}}>💡</span>
                  <div className="switch-checkbox">
                    <label className="switch">
                      <input type="checkbox" onClick={()=>setDarkMode(!darkMode)} />
                      <span className="slider round"> </span>
                    </label>
                  </div>
               <span style={{color: darkMode? "white":"grey"}}>🌑</span> 
           </div>
           <div>
           <ContentSlide />
            <VideoHistory />
            <ContentHistoryList/>
            <QuestionApp />
           </div>
           
        </div>
    )
}