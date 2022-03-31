import { useContext } from 'react'
import { useToasts } from 'react-toast-notifications'
import { AppContext } from '../context'
import { clearCartAction } from '../reducer'

import style from '../store.module.css'

const ClearCartButton = () => {
    const { dispatch } = useContext(AppContext)
    const { addToast } = useToasts()

    function onClick() {
        dispatch(clearCartAction())
        addToast('Ostoskori tyhjennetty', { appearance: 'success', autoDismiss: true })
    }
    return (
        <div className={style['clear-cart-button']}>
            <button onClick={onClick}>Tyhjennä ostoskori</button>
        </div>
    )
}

export default ClearCartButton
