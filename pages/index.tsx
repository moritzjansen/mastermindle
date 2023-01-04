import Link from 'next/link'
import GameInput from '../components/GameInput'
import GameRow from '../components/GameRow'
import Layout from '../components/Layout'

const IndexPage = () => (
  <Layout title="Mastermindle">
    <div className='flex-col flex flex-grow'>
      <div className='flex-grow' id='GameRows'>
        <GameRow></GameRow>
        <GameRow></GameRow>
        <GameRow></GameRow>
        <GameRow></GameRow>
        <GameRow></GameRow>
        <GameRow></GameRow>
      </div>
      <div>
        <GameInput></GameInput>
      </div>
    </div>
    
    
  </Layout>
)

export default IndexPage
