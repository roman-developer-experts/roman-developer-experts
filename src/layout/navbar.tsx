// /* eslint-disable jsx-a11y/no-static-element-interactions */
// /* eslint-disable jsx-a11y/click-events-have-key-events */
'use client';
import useNavBg from '@hook/index';
import { CloseIcon, MenuIcon } from '@icons/index';
import Button from '@shared/Button';
import Portal from '@shared/Portal';
import Image from 'next/image';
import logo from 'public/logo.png';
import { useId, useState } from 'react';

const Navbar = () => {
  const [open, setOpen] = useState<boolean>(false);
  const backgroundTransparent = useNavBg();
  const navLinks = [
    { id: useId(), title: 'Home', hash: '#home' },
    { id: useId(), title: 'About Us', hash: '#about' },
    { id: useId(), title: 'Our Services', hash: '#services' },
    { id: useId(), title: 'Projects', hash: '#projects' },
  ];
  const showDrawer = () => setOpen(true);
  const onClose = () => setOpen(false);

  return (
    <nav
      className={`fixed left-0 top-0 z-10 mx-auto flex w-full items-center justify-between px-6 py-4 transition-all ease-linear tablet:px-20 laptop:px-6 laptop:py-10 laptop-md:px-20  ${
        backgroundTransparent <= 0 ? 'bg-transparent' : 'bg-white'
      }
      ${backgroundTransparent <= 0 ? 'shadow-none' : 'shadow'}
      `}
    >
      <a href="/" className="w-max">
        <Image
          src={logo}
          alt="roman dev"
          className="w-1/2 object-contain tablet:w-[251px]"
          width={251}
          height={40}
        />
      </a>
      <div className="hidden items-center justify-between laptop:flex laptop:flex-row laptop:gap-[2.44rem]">
        <ul className="flex items-center justify-center gap-[2.31rem]">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`${link.hash}`}
                className="text-[0.9375rem] font-semibold leading-[1.36406rem] text-dark"
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>
        <Button
          className="bg-primary text-white hover:bg-primary/90 laptop:px-[2.4rem]"
          text="Get in Touch"
        />
      </div>
      <div className="relative block laptop:hidden">
        <MenuIcon
          onClick={showDrawer}
          style={{ fontSize: '21px' }}
          fill="#0D347EE5"
        />
      </div>
      {open && (
        <Portal onClose={onClose}>
          <div
            className="absolute right-0 top-0 h-full w-[70%] gap-4 bg-[#FFFCFA] p-4 pt-8 mobile-md:w-3/5"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-[90%]">
              <div className="mt-6 flex flex-col items-start justify-start gap-4 laptop:hidden">
                <ul className="flex flex-col items-center justify-center gap-[2.31rem]">
                  {navLinks.map((link) => (
                    <li key={link.id}>
                      <a
                        href={`${link.hash}`}
                        className="text-[0.9375rem] font-semibold leading-[1.36406rem] text-dark"
                      >
                        {link.title}
                      </a>
                    </li>
                  ))}
                </ul>
                <Button
                  className="bg-primary text-white hover:bg-primary/90 laptop:px-[2.4rem]"
                  text="Get in Touch"
                />
              </div>
            </div>
            <div onClick={onClose} className="absolute right-4 top-4 h-max">
              <CloseIcon />
            </div>
          </div>
        </Portal>
      )}
    </nav>
  );
};

export default Navbar;
