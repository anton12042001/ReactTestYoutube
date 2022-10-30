import React from 'react';
import cl from './Videos.module.css'

const Videos = ({titleVideo, thumbnails, channgelTitle}) => {
    return (
            <div className={cl.showVideo} >
                <div>
                    <img src={thumbnails}/>
                </div>
                <div>{titleVideo}</div>
                <div>{channgelTitle}</div>
            </div>
    );
};

export default Videos;