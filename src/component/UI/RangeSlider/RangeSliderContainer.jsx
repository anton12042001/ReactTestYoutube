import React, {useState} from 'react';
import RangeSlider from "./RangeSlider";

const RangeSliderContainer = ({sliderValue, setSliderValue}) => {
    const [sliderProps, setSliderProps] = useState({
        min: 0,
        max: 50,
        value: 12,
    });


    const handleSliderChange = (e) => {
        if(e.target){
            setSliderValue(e.target.value);
        }
    };


    return (
        <RangeSlider
            {...sliderProps}
            classes=""
            value={sliderValue}
            onChange={handleSliderChange}/>

    );
};

export default RangeSliderContainer;