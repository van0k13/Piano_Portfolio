import React from 'react'
import headerStyle from './HeaderStyle.module.scss'

interface iProps {
    h1Value: string;
    spanValue: string;
    transBackground?: boolean;
}
export const HeaderComponent: React.FC<iProps> = ({h1Value, spanValue, transBackground}) => {
    return <div className={headerStyle.headerContainer} style = {transBackground ? {background: 'none'} : undefined}>
    <h1>{h1Value} <span>{spanValue}</span></h1>
  </div>
}