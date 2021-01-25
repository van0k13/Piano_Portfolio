import React, { useEffect, useState } from 'react';
import styles from './SliderStyle.module.scss'

interface iProps {
    opened: boolean;
}

const CN = 'slider'

const Slider:React.FC<iProps> = ({opened, children}) => {
    useEffect(() => {
        setSliderOpened(opened)
    }, [opened])
    console.log(opened)
    const [sliderOpened, setSliderOpened] = useState(opened);
    const showSlider = sliderOpened ? `${CN}` : `${CN}_closed`;

    return (
        <div className={styles[showSlider]} onBlur={() => setSliderOpened(false)}>
            {children}
        </div>
    )
} 

export default Slider;