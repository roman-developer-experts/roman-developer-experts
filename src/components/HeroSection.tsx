import Button from '@shared/Button';
import Card from '@shared/Card';

const HeroSection = () => {
  return (
    <Card
      id="home"
      className="hero card-shadow relative px-6 py-12 laptop:py-28"
    >
      <div className="m-auto max-w-[798.75px] text-center">
        <h1 className="mb-2 text-3xl font-extrabold leading-[2.5rem] text-white laptop:mb-4 laptop:text-[2.8125rem] laptop:leading-[3.09375rem]">
          We provide technology-driven solutions that meet business goals.
        </h1>
        <p className="mb-8 text-sm font-medium leading-6 text-white laptop:text-base">
          Whether you&apos;re seeking robust web applications, scalable mobile
          solutions, or intricate system integrations, our passion for
          technology and commitment to excellence make us your ideal development
          partner.
        </p>
        <Button
          className="bg-white px-6 text-body2 hover:bg-white/90 laptop:px-12"
          text="Get in Touch"
        />
      </div>
    </Card>
  );
};

export default HeroSection;
