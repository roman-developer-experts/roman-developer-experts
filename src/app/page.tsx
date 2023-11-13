import dynamic from 'next/dynamic';

const HomePage = dynamic(() => import('@components/home'));

const Home = () => <HomePage />;

export default Home;
