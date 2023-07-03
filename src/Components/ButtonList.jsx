import React from 'react'
import Button from './Button'
import styles from "../Components/Styles/ButtonList.module.css";
const ButtonList = () => {
  let list = ["All", "Gaming", "Songs", "Manga", "Mixes", "Music", "Live", "AI", "History", "Lectures", "News", "Sales", "Podcast"];
  return (
    <div className={styles.btnList}>
      {list.map((ele,index) => {
        return(
          <Button name={ele} key={index}/>
        )
      })}
    </div>
  )
}

export default ButtonList