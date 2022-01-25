import '../styles/global.css'
import '../styles/winter.css'

import { ToastProvider } from 'react-toast-notifications'
import { AppProps } from 'next/app'
import { AppContextProvider } from '../store/context'

function App({ Component, pageProps }: AppProps) {
    return (
        <AppContextProvider>
            <ToastProvider placement={'bottom-center'}>
                <Component {...pageProps} />
            </ToastProvider>
        </AppContextProvider>
    )
}

export default App
