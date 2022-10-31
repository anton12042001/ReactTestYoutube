import {memo, useEffect} from "react";
import cl from './RangeSlider.module.css'

const RangeSlider = ({
                         classes,
                         value,
                         onChange,
                         ...sliderProps
                     }) => {

    useEffect(() => {
        onChange(value);
    }, []);


    return (
        <div className={cl.rangeSlider}>
            <div>Максимальное количество</div>
            <div>
                <input
                    {...sliderProps}
                    type="range"
                    value={value}
                    className={cl.sliderInput}
                    id="myRange"
                    onChange={onChange}
                />
                <span className={cl.RangeSliderValue} >{value}</span>
            </div>
        </div>
    );
};
export default memo(RangeSlider);