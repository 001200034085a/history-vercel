import React from "react";
import ContentApp from "./ContentApp";
import DarkLight from "./DarkLight";
import FooterApp from "./FooterApp";
import FooterHistory from "./FooterHistory";


export default function TrangChu(){
    return(
        <div>
            <DarkLight />
            <FooterApp />
            <FooterHistory />
        </div>
    )
}