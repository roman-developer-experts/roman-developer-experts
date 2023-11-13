import React from 'react';

const Button = ({ text, className }: { text: string; className: string }) => {
  return (
    <a
      href="#contact"
      className={`w-max rounded-[2.32194rem] text-[0.875rem] font-semibold leading-[1.27313rem] laptop:py-4 ${className}`}
    >
      {text}
    </a>
  );
};

export default Button;
