import React from "react";
import styles from "../Components/Styles/Body.module.css";

const VideoCard = ({ info }) => {
  return (
    <div className={styles.videoCard}>
      {info && (
        <>
          <img alt='thumbnail' src={info?.snippet?.thumbnails.medium.url} className={styles.cardImg}/>
          <ul>
            <li className={styles.cardTitle}>{info?.snippet?.title}</li>
            <li>{info?.snippet?.channelTitle}</li>
            <li>{info?.statistics?.viewCount} views</li>
          </ul>
        </>
      )}
    </div>
  );
};

export default VideoCard;
