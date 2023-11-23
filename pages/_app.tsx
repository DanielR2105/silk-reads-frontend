// pages/_app.tsx
import '../styles/index.scss';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import { NextComponentType } from 'next';
import { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} className="RenderedComponent"/>
      <Footer />
    </>
  );
}

export default MyApp;
