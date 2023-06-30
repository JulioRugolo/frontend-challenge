import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import styled from 'styled-components';
import ApiComponent from '../components/ApiComponent';

const inter = Inter({ subsets: ['latin'] });

function Home() {
  return (
    <HomePageWrapper>
      <Head>
        <title>My Page</title>
      </Head>
      <h1>My Page</h1>
      <ApiComponent />
    </HomePageWrapper>
  );
}

const HomePageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  padding: 20px;
`;

export default Home;
