import React from "react";
import styles from "../Components/Styles/Body.module.css";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
 const Body = () => {
    return(
        <>
        <div className={styles.Body}>
        <Sidebar/>
        <Outlet/>
       
        </div>
        </>
    )
 };

 export default Body;