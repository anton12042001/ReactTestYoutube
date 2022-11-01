import React from 'react';
import cl from './Videos.module.css'

const Videos = ({titleVideo, thumbnails, channelTitle}) => {
    return (
        <div className={cl.showVideo}>
            <img src={thumbnails}/>
            <div className={cl.titleVideos} >{titleVideo}</div>
            <div className={cl.chanelTitle} >{channelTitle}</div>
        </div>
    );
};

export default Videos;