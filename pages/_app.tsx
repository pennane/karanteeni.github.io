import { ToastProvider } from 'react-toast-notifications'
import { AppProps } from 'next/app'

import '../styles/global.css'
// import '../styles/winter.css'
import '../styles/easter.css'
// import '../styles/summer.css'
// import '../styles/autumn.css'

function App({ Component, pageProps }: AppProps) {
    return (
        <ToastProvider placement={'bottom-center'}>
            <Component {...pageProps} />
        </ToastProvider>
    )
}

export default App
