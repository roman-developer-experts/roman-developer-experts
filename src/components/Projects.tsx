'use client';
import { ArrowIcon } from '@icons/index';
import Image from 'next/image';
import preview1 from 'public/images/preview-1.png';
import preview2 from 'public/images/preview-2.png';
import preview3 from 'public/images/preview-3.png';
import { useId } from 'react';

const Projects = () => {
  const projects = [
    {
      id: useId(),
      img: preview1,
      bgColor: 'bg-[#FFFEED]',
      title: 'Soower',
      desc: 'A platform for donating to projects for widows, orphans and missionaries in Nigeria, as well as churches and christian organizations.',
      link: 'https://www.soower.ng',
    },
    {
      id: useId(),
      img: preview2,
      bgColor: 'bg-[#F7EEE8]',
      title: 'TRT Arredo',
      desc: 'A Nigerian brand with a global view of luxury furniture manufacturing that creates exceptional furniture for its unique clientele.',
      link: 'https://www.trtarredo.com',
    },
    {
      id: useId(),
      img: preview3,
      bgColor: 'bg-[#DAF8FF]',
      title: 'Ready Cabinets',
      desc: 'A brand that provides affordable, quality ready-made cabinets for their customers.',
      link: 'https://ready-cabinets.vercel.app',
    },
  ];
  return (
    <section id="projects" className="my-24 laptop:my-[12rem]">
      <div className="mb-12 max-w-[605px] laptop:mb-16">
        <p className="text-[0.92875rem] font-semibold leading-[1.35138rem] tracking-[0.11144rem] text-body2">
          PROJECTS
        </p>
        <h2 className="my-3 text-3xl font-extrabold leading-[2.40625rem] text-black laptop:my-5 laptop:text-[2.1875rem]">
          We have worked on some amazing products across different industries
        </h2>
      </div>
      <div className="grid items-center justify-center gap-y-14 laptop:grid-cols-2 laptop:justify-between laptop:gap-x-8">
        {projects.map((project) => (
          <div key={project.id}>
            <div
              className={`h-[160px] rounded-[1.06481rem] px-4 mobile-md:h-[190px] mobile-lg:h-[220px] tablet:h-[250px] laptop:h-[275px] laptop:w-[480px] laptop:px-0 ${project.bgColor}`}
            >
              <Image
                src={project.img}
                alt={project.title}
                sizes="(max-width: 768px) 450px, 520px"
                className="mx-auto object-contain pt-10 tablet:w-[425px] laptop:h-[293.973px] laptop:pt-12"
              />
            </div>
            <div className="mt-12 max-w-[475px] px-5">
              <h5 className="mb-1 text-[1.3125rem] font-bold leading-[1.575rem] text-body2">
                {project.title}
              </h5>
              <p className="mb-4 text-[0.9375rem] leading-[1.41094rem] text-body">
                {project.desc}
              </p>
              <a
                href={project.link}
                className="group flex w-max items-center justify-start gap-2 text-primary"
                target="_blank"
                rel="noreferrer"
              >
                <span className="text-[1.0625rem] font-semibold leading-[1.59906rem]">
                  Visit
                </span>
                <span className="transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  <ArrowIcon />
                </span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
