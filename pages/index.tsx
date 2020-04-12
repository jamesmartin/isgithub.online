import { NextPage } from 'next';
import fetch from 'isomorphic-unfetch';

interface Props {
  online: boolean;
}

const Status = ({ online}: Props) => {
  return (
    <div>
      <div className='status'>{ online ? '👍' : '👎' }</div>
      <style jsx>{`
          .status {
            margin: 0;
            position: absolute;
            top: 50%;
            left: 50%;
            margin-right: -50%;
            transform: translate(-50%, -50%);
            font-size: 6em;
          }
        `}</style>
    </div>
  )
}
const Home: NextPage<Props> = ({ online }) => (
  <div>
    <h1>Is github.com online?</h1>
    <Status online={online}/>
    <style jsx>{`
      h1 {
        text-align: center;
        font-family: Arial, Helvetica, sans-serif;
      }
    `}</style>
  </div>
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
