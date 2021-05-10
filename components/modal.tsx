import { useState } from 'react'
import useKeyboardInput from '../lib/useKeyboardInput'

import modalStyles from '../styles/modal.module.css'

const Modal = ({ children, title }) => {
    useKeyboardInput(() => close(), ['Escape'])
    const [show, setShow] = useState(true)
    const close = () => {
        if (!show) return
        setShow(false)
    }
    return (
        <div className={`${modalStyles['modal-container']} ${show ? modalStyles['show'] : ''}`}>
            <div className={`${modalStyles['modal']}`}>
                <div className={`${modalStyles['modal-header']}`}>
                    <h4 className={`${modalStyles['modal-title']}`}>{title}</h4>
                    <div className={`${modalStyles['modal-header-close']}`} onClick={() => close()}>
                        <span aria-hidden="true">×</span>
                    </div>
                </div>
                <div className={`${modalStyles['modal-content']}`}>{children}</div>
                <div className={`${modalStyles['modal-footer']}`}>
                    <div className={`${modalStyles['modal-footer-close']} button`} onClick={() => close()}>
                        <span>Sulje</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal
