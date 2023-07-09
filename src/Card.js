import { useState } from "react";
import './index.css';
function  Card({id,Name,Package,Decription,image,removetour}){
    const [read,setread]=useState(false);
    const info=read? Decription:`${Decription.substring(0,200)}...`;

function readdata(){
    setread(!read);}

    return(
        <div className="card">
            <img src={image} className="image"></img>
            <div className="tour-info">
                <div className="tour-details">
                    <h4 className="tour-price">Rs {Package}</h4>
                    <h4 className="tour-name">{Name}</h4>
                </div>
                <div className="description">
                {info}
                <span onClick={readdata} className="read-more">{read?`show less`:`read more`}</span>
                </div>
            </div>
            <button className="btn-red" onClick={()=>removetour(id)}>Not Intrested</button>
        </div>
    );
}
export default Card;