import React from "react";
import './sidebar.css';

import Logo from '../Assetss/Logo.png'
import{BsListColumnsReverse,BsMouse3Fill} from 'react-icons/bs'
import {MdDeliveryDining,MdKebabDining} from 'react-icons/md'
import {GiSettingsKnobs} from 'react-icons/gi'
import{AiFillPieChart,AiFillContacts} from 'react-icons/ai'
import{BiTrendingUp} from 'react-icons/bi'
import{BsQuestionCircle} from 'react-icons/bs'



const Sidebar = ()=> {
    return (
        <div className="sideBar grid">
            <div className="logoDiv flex">
                <img src={Logo} alt="Image Name"/>
                <h2>MY LIE</h2>
            </div>

            <div className="meniDiv">
                <h3 className="divTitle"> MENU NEW</h3>
                <ul className="menuLists grid">
                    
                    <li className="lisItem">
                        <a href="#" className="menuLink flex">
                            <BsListColumnsReverse className="icon"/>
                            <span className="smallText">
                                Dash board
                            </span>
                        </a>
                    </li>
                      
                    <li className="lisItem">
                        <a href="#" className="menuLink flex">
                            <MdDeliveryDining className="icon"/>
                            <span className="smallText">
                                Pro file
                            </span>
                        </a>
                    </li>
                      
                    <li className="lisItem">
                        <a href="#" className="menuLink flex">
                            <MdKebabDining className="icon"/>
                            <span className="smallText">
                                My name
                            </span>
                        </a>
                    </li>
                      
                    <li className="lisItem">
                        <a href="#" className="menuLink flex">
                            <BsMouse3Fill className="icon"/>
                            <span className="smallText">
                                Hous 
                            </span>
                        </a>
                    </li>
                    
                </ul>
            </div>

            <div className="settingDiv">
                <h3 className="divTitle"> SETTING</h3>
                <ul className="menuLists grid">
                    
                    <li className="lisItem">
                        <a href="#" className="menuLink flex">
                            <GiSettingsKnobs className="icon"/>
                            <span className="smallText">
                               Setting 
                            </span>
                        </a>
                    </li>
                      
                    <li className="lisItem">
                        <a href="#" className="menuLink flex">
                            <AiFillPieChart className="icon"/>
                            <span className="smallText">
                                Chart
                            </span>
                        </a>
                    </li>
                      
                    <li className="lisItem">
                        <a href="#" className="menuLink flex">
                            <BiTrendingUp className="icon"/>
                            <span className="smallText">
                                Trending Up
                            </span>
                        </a>
                    </li>
                      
                    <li className="lisItem">
                        <a href="#" className="menuLink flex">
                            <AiFillContacts className="icon"/>
                            <span className="smallText">
                                Contacts 
                            </span>
                        </a>
                    </li>
                    
                </ul>
            </div>
            <div className="sideBarCard">
                <BsQuestionCircle className="icon"/>
                <div className="carContent">
                    <div className="circle1"></div>
                    <div className="circle2"></div>
                    <h3>Help Center</h3>
                    <p>Having trouble in MY LIE, please contact us</p>
                    <button className="btn">Go to help center</button>
                </div>
            </div>
        </div>
    )
}
export default Sidebar