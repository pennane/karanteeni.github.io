import '../styles/global.css'
import '../styles/winter.css'

// const month = new Date().getMonth() + 1

// if (month < 3 || month === 12) {
//     import('../styles/winter.css'!)
// } else if (month < 6) {
//     import('../styles/easter.css'!)
// } else if (month < 9) {
//     import('../styles/summer.css'!)
// } else if (month < 12) {
//     import('../styles/autumn.css'!)
// }

import { ToastProvider } from 'react-toast-notifications'
import { AppProps } from 'next/app'

function App({ Component, pageProps }: AppProps) {
    return (
        <ToastProvider placement={'bottom-center'}>
            <Component {...pageProps} />
        </ToastProvider>
    )
}

export default App
