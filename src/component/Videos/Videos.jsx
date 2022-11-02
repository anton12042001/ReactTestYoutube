import React from 'react';
import cl from './Videos.module.css'

const Videos = ({titleVideo, thumbnails, channelTitle,viewSwitcherGrid}) => {
    return (
        <div className={(viewSwitcherGrid) ? cl.showVideoGrid : cl.showVideoList  }>
            <img src={thumbnails}/>
            <div>
                <div className={cl.titleVideos} >{titleVideo}</div>
                <div className={cl.chanelTitle} >{channelTitle}</div>
            </div>
        </div>
    );
};

export default Videos;