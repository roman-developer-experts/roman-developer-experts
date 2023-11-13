import Script from 'next/script';
import { Fragment } from 'react';
import { About, Contact, HeroSection, Projects, Services } from './index';

const Home = () => {
  return (
    <Fragment>
      <Script
        src={process.env.CLOUDFLARE_TURNSTILE_CHALLENGE_URL}
        defer
        async
        strategy="lazyOnload"
      />
      <HeroSection />
      <About />
      <Services />
      <Projects />
      <Contact />
    </Fragment>
  );
};

export default Home;
