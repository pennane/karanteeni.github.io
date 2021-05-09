import '../styles/global.css'
import '../styles/summer.css'

import { ToastProvider } from 'react-toast-notifications'
import { AppProps } from 'next/app'

function App({ Component, pageProps }: AppProps) {
    return (
        <ToastProvider placement={'bottom-center'} portalTargetSelector={'#layout'}>
            <Component {...pageProps} />
        </ToastProvider>
    )
}

export default App
