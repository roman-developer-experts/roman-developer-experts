import { useEffect, useState } from 'react';

const useNavBg = () => {
  const [clientWindowHeight, setClientWindowHeight] = useState<number>(0);
  const [backgroundTransparent, setBackgroundTransparent] = useState<number>(0);
  const handleScroll = () => {
    setClientWindowHeight(window.scrollY);
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  useEffect(() => {
    const backgroundTransparentVar = clientWindowHeight / 600;

    if (backgroundTransparentVar < 1) {
      setBackgroundTransparent(backgroundTransparentVar);
    }
  }, [clientWindowHeight]);
  return backgroundTransparent;
};

export default useNavBg;
