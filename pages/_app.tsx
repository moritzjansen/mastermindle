import { AppProps } from 'next/app'

import '../styles/index.css'
import '../styles/GameRowGuesses.css'
import '../styles/Hints.css'
import '../styles/SolutionRow.css'
import '../styles/Separators.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Component {...pageProps} />
  ) 
}

export default MyApp;