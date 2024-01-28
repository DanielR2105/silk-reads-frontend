import Head from 'next/head';
import Link from 'next/link';
import Hero from '../components/landing/hero';

const Home: React.FC = () => {
  return (
    <div className="home">
      <Hero />
    </div>
  );
};

export default Home;
