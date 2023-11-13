import { IProps } from '@lib/type';
import React from 'react';

type CardProps = IProps & {
  id: string;
  className: string;
};
const Card = ({ id, children, className }: CardProps) => {
  return (
    <section
      id={id}
      className={`bg-card ${className} rounded-2xl bg-cover bg-local bg-top bg-no-repeat`}
    >
      {children}
    </section>
  );
};

export default Card;
