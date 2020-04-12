import { NextPage } from 'next';

interface Props {
  online: boolean;
}

const Home: NextPage<Props> = ({ online }) => (
  <h1>Is GitHub Online? {online ? 'Yes' : 'No'}</h1>
)

Home.getInitialProps = async (ctx) => {
  const online = true
  return { online }
}

export default Home;
