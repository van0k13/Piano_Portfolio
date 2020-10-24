import React, { Dispatch, SetStateAction } from 'react';
import styles from './ButtonStyle.module.css'

interface IPropsButtonWithHookSupp {
    noContainer?: boolean,
    buttonValue: string,
    booleanValue?: boolean
    buttonOnClick?: Dispatch<SetStateAction<string>>,
    buttonOnClickBoolean?: (value: boolean | undefined) => void,
    buttonName: string
}
export const ButtonWithHookSupp: React.FC<IPropsButtonWithHookSupp> = ({
                                                buttonOnClick, buttonName,
                                                buttonOnClickBoolean, booleanValue,
                                                noContainer, buttonValue
                                                }) => {
    const onClick = () => {
        if (buttonOnClick) buttonOnClick(buttonValue)
        else if (buttonOnClickBoolean) buttonOnClickBoolean(booleanValue)
    }
    if (!noContainer) {
    return <div className={styles.buttonsContainer}>
        <button className={styles.button} onClick={onClick}>{buttonName}</button>
        </div>
    } else return <button className={styles.button} onClick={onClick}>{buttonName}</button>
};



interface IPropsButton {
    noContainer?: boolean,
    booleanValue?: boolean
    buttonOnClick?: () => void,
    buttonPromiseOnClick?: () => (() => Promise<void>) | undefined,
    buttonOnClickBoolean?: (value: boolean | undefined) => void,
    buttonName: string
}

export const Button: React.FC<IPropsButton> = ({
    buttonOnClick, buttonName,
    buttonOnClickBoolean, booleanValue,
    noContainer, buttonPromiseOnClick
    }) => {
const onClick = () => {
if (buttonOnClick) buttonOnClick()
else if (buttonOnClickBoolean) buttonOnClickBoolean(booleanValue)
else if (buttonPromiseOnClick) buttonPromiseOnClick()
}
if (!noContainer) {
return <div className={styles.buttonsContainer}>
<button className={styles.button} onClick={onClick}>{buttonName}</button>
</div>
} else return <button className={styles.button} onClick={onClick}>{buttonName}</button>
};