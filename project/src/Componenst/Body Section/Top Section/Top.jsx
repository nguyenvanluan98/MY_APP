import React from "react";
import "./top.css";
import { BsSearch } from "react-icons/bs";
import { AiOutlineMessage,AiOutlineNotification } from "react-icons/ai";

import img from '../Top Section/Assetss/user.png'


const Top = () => {
  return (
        <div className="topSection">
            <div className="headerSection flex">
                <div className="title">
                    <h1>WELCOME TO MY LINE</h1>
                    <p>Hello pro, welcome back!</p>
                </div>
                <div className="searchBar flex">
                    <input type="text" placeholder="search Dashboard" />
                    <BsSearch className="icon"/>
                </div>
                <div className="admin flex">
                    <AiOutlineMessage className='icon'/>
                    <AiOutlineNotification className='icon'/>
                    <div className="adminImage">
                    <img src={img} alt="admin Image" />
                    </div>
                   
                </div>
            </div>
        </div>
  );
};
export default Top;
