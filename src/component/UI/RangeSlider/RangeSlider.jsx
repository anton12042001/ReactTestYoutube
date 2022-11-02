import {memo, useEffect, useState} from "react";
import cl from './RangeSlider.module.css'

const RangeSlider = ({sliderFullness,classes, value, onChange, ...sliderProps}) => {

    useEffect(() => {
        onChange(value);
    }, []);


    return (
        <div>
            <div className={cl.maxCount}>Максимальное количество</div>
            <div className={cl.rangeSlider}>
                <div>
                    <input
                        style={{background:`-webkit-linear-gradient(left,#42a6ea 0%, #42a6ea ${sliderFullness}%,#fff ${sliderFullness}%, #fff 100%)`}}
                        {...sliderProps}
                        type="range"
                        value={value}
                        className={cl.sliderInput}
                        id="myRange"
                        onChange={onChange}
                    />
                </div>
                <div className={cl.rangeSliderValueContaiener} >
                    <div className={cl.RangeSliderValue}>
                        {value}
                    </div>
                </div>
            </div>
        </div>
    );
};
export default memo(RangeSlider);