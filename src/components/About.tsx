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
      className="my-[12rem] grid grid-cols-[3fr,2fr] items-center justify-between"
    >
      <div className="max-w-[610px]">
        <p className="text-[0.92875rem] font-semibold leading-[1.35138rem] tracking-[0.11144rem] text-body2">
          ABOUT US
        </p>
        <div>
          <h2 className="my-5 text-[2.1875rem] font-extrabold leading-[2.40625rem] text-black">
            Crafting solutions that redefine technology.
          </h2>
          <p className="text-base leading-[1.6875rem] text-body">
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
        <ul className="check-mark relative mt-8 grid grid-cols-2 items-center justify-between gap-x-8 gap-y-3">
          {listItems.map((list) => (
            <li
              className="flex items-center gap-3 text-[0.9375rem] font-semibold leading-[1.41094rem] text-body"
              key={list.id}
            >
              <TickIcon />
              {list.text}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col gap-8">
        <div>
          <Image
            src={img1}
            alt="about 1"
            className="max-w-[516px] rounded-[0.81069rem]"
          />
        </div>
        <div className="align-center flex justify-between">
          <div className="rounded-[0.81069rem] bg-primary px-10 py-8 text-white">
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
            className="max-w-[294px] rounded-[0.81069rem]"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
