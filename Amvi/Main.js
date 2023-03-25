import "./MainStyle.css";
import React from "react";
function Main(props) {
  return (
    <>
      <div className={props.imgs}>
        <img
          alt="img"
          src={props.mainimg}
        />
      </div>
      <div className="main-text">
        <h1>{props.title}</h1>
        
        <a href={props.orgurl} className={props.orgbttn}>{props.org}</a>
        <a href={props.parturl} className={props.partbttn}>{props.part}</a>
      </div>
    </>
  );
}

export default Main;
