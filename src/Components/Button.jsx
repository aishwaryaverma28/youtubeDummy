import React from 'react';
import styles from "../Components/Styles/ButtonList.module.css";
const Button = ({name}) => {
    return (
        <>
        <div>
            <button className={styles.Button}>
                {name}
            </button>
        </div>
        </>
    )
}
export default Button;