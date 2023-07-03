import React from 'react';
import styles from '../Components/Styles/Sidebar.module.css';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
const Sidebar = () => {
    const isMenuOpen = useSelector(store => store.app.isMenuOpen)
    if (!isMenuOpen) return null;
    //early return
    return(
        <>
        <div className={styles.sidebar}>
        <ul>
                <li><Link to="/">Home</Link></li>
                <li>Shorts</li>
                <li>Videos</li>
                <li>Live</li>
            </ul>
            <hr/>
            <h3>Subscriptions</h3>
            <ul>
                <li>Music</li>
                <li>Sports</li>
                <li>Gaming</li>
                <li>Movies</li>
            </ul>
            <hr/>
            <h3>Watch Later</h3>
            <ul>
                <li>Music</li>
                <li>Sports</li>
                <li>Gaming</li>
                <li>Movies</li>
            </ul>
            <hr/>
        </div>
        </>
    )
};
export default Sidebar;