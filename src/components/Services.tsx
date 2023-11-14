'use client';
import Image from 'next/image';
import web from 'public/icons/icon-1.png';
import mobile from 'public/icons/icon-2.png';
import saas from 'public/icons/icon-3.png';
import cloud from 'public/icons/icon-4.png';
import consulting from 'public/icons/icon-5.png';
import security from 'public/icons/icon-6.png';
import { useId } from 'react';

const Services = () => {
  const services = [
    {
      id: useId(),
      img: web,
      title: 'Web Development',
      desc: 'Elevate your online presence with our expert web development services, creating responsive and feature-rich websites tailored your unique needs.',
    },
    {
      id: useId(),
      img: mobile,
      title: 'Mobile App Development',
      desc: 'Our custom mobile app development, brings your ideas to life on iOS and Android platforms for a seamless user experience.',
    },
    {
      id: useId(),
      img: saas,
      title: 'Saas Applications',
      desc: 'Transform your business operations with our SaaS app development expertise, delivering scalable and intuitive solutions that streamline processes and enhance efficiency.',
    },
    {
      id: useId(),
      img: cloud,
      title: 'Cloud Migration',
      desc: 'Our specialized cloud migration services, ensure secure and efficient relocation of your data and applications to modern cloud infrastructure.',
    },
    {
      id: useId(),
      img: consulting,
      title: 'IT Consulting',
      desc: 'We help you navigate the complex landscape of technology, aligning your IT strategy with business objectives for optimal performance and growth.',
    },
    {
      id: useId(),
      img: security,
      title: 'IT Security',
      desc: 'We provide you with robust measures to protect against cyber threats and ensuring the confidentiality and integrity of your critical data.',
    },
  ];
  return (
    <section id="services" className="text-center">
      <div className="mb-16">
        <p className="text-[0.92875rem] font-semibold leading-[1.35138rem] tracking-[0.11144rem] text-body2">
          OUR SERVICES
        </p>
        <h2 className="my-3 text-3xl font-extrabold leading-[2.40625rem] text-black laptop:my-5 laptop:text-[2.1875rem]">
          We provide high-quality IT solutions
        </h2>
      </div>
      <div className="grid items-center justify-center gap-12 tablet:grid-cols-2 laptop:grid-cols-3 laptop:justify-between laptop:gap-16">
        {services.map((item) => (
          <div className="max-w-[311.139px]" key={item.id}>
            <Image
              src={item.img}
              alt={item.title}
              className="m-auto max-w-[56.894px] object-contain"
            />
            <h4 className="my-3 text-[1.3125rem] font-bold leading-[1.44375rem] text-body">
              {item.title}
            </h4>
            <p className="text-[0.9375rem] leading-[1.41094rem] text-body">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
