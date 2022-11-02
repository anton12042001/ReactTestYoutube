import React, {useState} from 'react';
import RangeSlider from "./RangeSlider";
import cl from './RangeSlider.module.css'


const RangeSliderContainer = ({sliderValue, setSliderValue}) => {
    const [sliderProps, setSliderProps] = useState({
        min: 0,
        max: 50,
        value: 12,
    });
    const [sliderFullness, setSliderFullness] = useState(24)

    const handleSliderChange = (e) => {
        if (e.target) {
            setSliderValue(e.target.value);
            setSliderFullness(e.target.value / 50 * 100)
        }
    };


    return (
        <RangeSlider
            sliderFullness={sliderFullness}
            {...sliderProps}
            value={sliderValue}
            onChange={handleSliderChange}/>

    );
};

export default RangeSliderContainer;