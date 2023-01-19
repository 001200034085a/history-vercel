import React, { useState } from "react";

export default function CreateExpenseForm({onCreateFooter}){
    const [editable, setEditable]=useState(false);
    const [newName, setNewName]=useState('');
    const [newIdea, setNewIdea]=useState('');
    const [newOpinion, setNewOpinion]=useState('');

    

    const handleCreateFooter= async(event)=>{
        event.preventDefault();
        if(!newName||!newIdea||!newOpinion){
            alert("vui lòng nhập lại giữ liệu")
            return
        }
        onCreateFooter(newName,newIdea,newOpinion);  

        setNewName('');
        setNewIdea('')
        setNewOpinion('')
        setEditable(false)

        
        let result = await fetch("https://good-eel-visor.cyclic.app/api/comment",{
      method:"post",
      body:JSON.stringify({name:newName, idea:newIdea, opinion:newOpinion}),
      headers:{
        "Content-Type":'application/json'
      }
    })
    result = await result.json();
    }
    return(
        <form onSubmit={handleCreateFooter} className="create-footer-form">
           {!editable && <div className="footer-create-form">
                 <button type="button" onClick={()=>setEditable(true)} >ý kiến của bạn</button>
           </div> }
           {editable && <div >
                <div className="input-group" >
                    <label>name</label>
                    <input type="text" onChange={(event)=>setNewName(event.target.value)} />
                </div> 
                <div className="input-group" >
                    <label>idea</label>
                    <input type="text" onChange={(event)=>setNewIdea(event.target.value)} />
                </div> 
                <div className="input-group" >
                    <label>opinion</label>
                    <input type="text" onChange={(event)=>setNewOpinion(event.target.value)} />
                </div> 
                <div className="action">
                    <button type="submit">add</button>
                    <button type="button" onClick={()=>setEditable(false)}>cancel</button>
                </div>
            </div>}
        </form> 

    )
}
