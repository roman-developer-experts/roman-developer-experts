'use client';
import { TickIcon } from '@icons/index';
import Image from 'next/image';
import img1 from 'public/images/img-1.png';
import img2 from 'public/images/img-2.png';
import { useId } from 'react';

const About = () => {
  const listItems = [
    { id: useId(), text: 'Client-First Approach' },
    { id: useId(), text: 'On Time Delivery' },
    { id: useId(), text: 'Expert Team' },
    { id: useId(), text: 'Result Oriented' },
  ];
  return (
    <section
      id="about"
      className="my-24 grid items-center justify-between gap-12 laptop:my-[12rem] laptop:grid-cols-[3fr,2fr]"
    >
      <div className="max-w-[610px]">
        <p className="text-[0.92875rem] font-semibold leading-[1.35138rem] tracking-[0.11144rem] text-body2">
          ABOUT US
        </p>
        <div>
          <h2 className="my-3 text-3xl font-extrabold leading-[2.40625rem] text-black laptop:my-5 laptop:text-[2.1875rem]">
            Crafting solutions that redefine technology.
          </h2>
          <p className="text-sm leading-[1.6875rem] text-body laptop:text-base">
            We are a technology firm specializing in software development,
            training, networking, hardware procurement/maintenance, IT
            consulting and cloud infrastructure. Our journey is rooted in a
            commitment to providing unparalleled expertise and innovation to our
            clients. With a passion for problem-solving and an unwavering
            dedication to quality, we pride ourselves on delivering
            technology-driven solutions that not only meet but anticipate and
            exceed the unique business goals of our partners. From concept to
            code, we embrace every challenge as an opportunity to showcase our
            skills and create transformative digital experiences.
          </p>
        </div>
        <ul className="check-mark relative mt-4 grid items-center justify-between gap-x-8 gap-y-2 tablet:grid-cols-2 laptop:mt-8 laptop:gap-y-3">
          {listItems.map((list) => (
            <li
              className="flex items-center gap-3 text-sm font-semibold leading-[1.41094rem] text-body laptop:text-[0.9375rem]"
              key={list.id}
            >
              <TickIcon />
              {list.text}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col gap-y-4 laptop:gap-y-6">
        <div>
          <Image
            src={img1}
            alt="about 1"
            sizes="(max-width: 768px) 375px, (max-width: 1200px) 516px, 516px"
            className="rounded-[0.81069rem]"
          />
        </div>
        <div className="align-center flex gap-x-4 laptop:gap-x-6">
          <div className="flex flex-col items-center justify-center rounded-[0.81069rem] bg-primary px-4 py-8 text-white mobile-lg:px-10">
            <h3 className="text-[2.83731rem] font-extrabold leading-[3.12106rem]">
              100+
            </h3>
            <span className="text-[0.81069rem] font-bold leading-[1.1795rem]">
              Satisfied Clients
            </span>
          </div>
          <Image
            src={img2}
            alt="about 2"
            sizes="(max-width: 320px) 130px, (max-width: 768px) 150px,(max-width: 1024px) 170px, (max-width: 1200px) 294px, 294px"
            className="rounded-[0.81069rem]"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
