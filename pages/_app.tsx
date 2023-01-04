import { AppProps } from 'next/app'

import '../styles/index.css'
import '../styles/GameRowGuesses.css'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp;