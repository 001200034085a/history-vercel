import React, { useEffect, useState } from "react";
import QuestionsData from "../../data/QuestionsData";

export default function QuestionApp(){
    const [showFinalResults, setShowFinalResults]=useState(true);
    const [score, setScore]=useState(0);
    const [currentQuestion, setCurrentQuestion]=useState(0);
    const [data, setData] =useState(QuestionsData);
    const [time, setTime] = useState(60);

    useEffect(()=>{
        const interval = setInterval(()=>{
            if(time <= 0){
                setShowFinalResults(true);
                return;
            }
            setTime(time -1);
        },1000)
        return()=>clearInterval(interval);
    },[time])

    const optionClicked=(isCorrect)=>{
        if(isCorrect){
            setScore(score+1)
        }

        if(currentQuestion+1 < data.length){
            setCurrentQuestion(currentQuestion+1)
        }
        else{
            setShowFinalResults(true)
        }
        
    }
    
    const startGame=()=>{
        setShowFinalResults(false);
        setTime(60)
        setScore(0);
        setCurrentQuestion(0);
    }
    

    return(
       <div className="App">
           <hr/>
          <h1 style={{color:"blue"}} >câu hỏi lịch sử</h1>

          <h2 style={{color:"blue"}}>số câu :{score} đúng</h2>
          
          {showFinalResults ? <div className="final-results">
               <h2>đúng {score} trong {data.length} câu ({(score/data.length)*10}đ)</h2>
               <button onClick={startGame}>bắt đầu</button>
          </div>:<div className="question-core" >
              <h2 className="question-text">thời gian:{time}s</h2>
              <h2>{currentQuestion+1} trong số {data.length} câu</h2>
              <h3 className="question-text">{data[currentQuestion].text}</h3>

              <ul>
                  {data[currentQuestion].options.map(option=>{
                      return(
                          <li onClick={()=>optionClicked(option.isCorrect)} key={option.id}>{option.text}</li>
                      )
                  })}
              </ul>
          </div>}
          <br/>
          
       </div>
    )
}