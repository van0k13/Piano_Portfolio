import React from 'react'
import s from './modals.module.scss'

interface IModal {
    setIsOpenModal: (value: boolean) => void
}

const ModalNotify: React.FC<IModal> = ({children, setIsOpenModal}) => {
    return (
        <div className={s.main}>
            <div className={s.modelWrapper} onClick={()=>setIsOpenModal(false)}/>
            <div className={s.childrenWrapper}>
                <div className={s.children}>{children}</div>
            </div>

        </div>
    );
};

export default ModalNotify;
