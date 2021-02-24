import React from 'react'
import { useTranslation } from 'react-i18next';
import headerStyle from './HeaderStyle.module.scss'

interface iProps {
  h1Value: string;
  spanValue: string;
  transBackground?: boolean;
}
export const HeaderComponent: React.FC<iProps> = ({ h1Value, spanValue, transBackground }) => {

  const { t } = useTranslation();

  return (
    <div className={headerStyle.headerContainer} style={transBackground ? { background: 'none' } : undefined}>
      <h1>{t(h1Value)} <span>{t(spanValue)}</span></h1>
    </div>
  )
}