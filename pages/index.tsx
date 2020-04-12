import { NextPage } from 'next';
import fetch from 'isomorphic-unfetch';

interface Props {
  online: boolean;
}

const Home: NextPage<Props> = ({ online }) => (
  <h1>Is GitHub Online? {online ? 'Yes' : 'No'}</h1>
)

Home.getInitialProps = async (ctx) => {
  const url = 'https://github.com/login'
  let online = false
  try {
    const response = await fetch(url, { method: 'HEAD' })
    online = response.ok
  } catch (error) {
    console.log(`Error fetching ${url}: ${error}`)
  }
  return { online }
}

export default Home;
