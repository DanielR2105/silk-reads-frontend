import '../styles/index.scss';
import Navbar from '../components/nav/navbar';
import Footer from '../components/footer';
import { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Navbar />
      <div  className="renderedComponent">
      <Component {...pageProps}/>
      </div>
      <Footer />
    </div>
  );
}

export default MyApp;
