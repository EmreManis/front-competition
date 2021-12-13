import '../styles/globals.css'

import MainNavigation from '../components/navigation/MainNavigation';

function MyApp({ Component, pageProps }) {

  return <MainNavigation><Component {...pageProps} /></MainNavigation>
}

export default MyApp
