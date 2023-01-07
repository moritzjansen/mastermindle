import { AppProps } from 'next/app'

import '../styles/index.css'
import '../styles/GameRowGuesses.css'
import '../styles/Hints.css'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp;