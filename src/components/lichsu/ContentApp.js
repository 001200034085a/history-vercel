// import React from "react";
// import ContentHistory from "./ContentHistory";
// import HistoryDetai from "./HistoryDetai";
// import {BrowserRouter,Routes,Route} from "react-router-dom";
// import { Container } from "react-bootstrap";



// export default function ContentApp(){
  
//     return(
//         <div className="content-app">
          
//               <BrowserRouter className="history-content">
//                 <div >
//                    <Container>
//                        <Routes>
//                           <Route path={""} element={<ContentHistory/>} >
//                             <Route path={":id"} element={<HistoryDetai/>} > </Route>
//                           </Route>
//                           <Route path="*" element={<h2 className="text-danger">404 not found</h2>} />
//                        </Routes>                     
//                    </Container>
//                 </div>
//              </BrowserRouter>
             
//         </div>
//     )
// }