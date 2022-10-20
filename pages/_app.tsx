import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Header from '../components/Header';
import { BoardProvider } from '../context/boardContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <BoardProvider>
        <Header />
        <Component {...pageProps} />
      </BoardProvider>
    </>
  );
}

export default MyApp;
