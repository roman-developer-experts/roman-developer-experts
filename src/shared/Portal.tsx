/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { ReactNode, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

const Portal = ({
  children,
  onClose,
}: {
  children: ReactNode;
  onClose: () => void;
}) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return mounted
    ? createPortal(
        <div
          className="fixed left-0 top-0 z-50 h-screen w-full bg-black/40 backdrop-blur-[1px]"
          onClick={onClose}
        >
          {children}
        </div>,
        document.body
      )
    : null;
};

export default Portal;
