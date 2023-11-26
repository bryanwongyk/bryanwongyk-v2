'use client';
import { useEffect, useState } from 'react';

const ReadingProgressBar = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const updateScrollPercentage = () => {
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY;
      const percentage = (scrolled / scrollHeight) * 100;
      setScrollPercentage(percentage);
    };

    // Attach the scroll event listener
    window.addEventListener('scroll', updateScrollPercentage);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', updateScrollPercentage);
    };
  }, []);

  return (
    <div
      className='fixed left-0 top-0 z-50 h-[6px] border-[1px] border-neutral-400 bg-cyberpunkYellow-400 transition-all sm:shadow-md'
      style={{ width: `${scrollPercentage}%` }}
    />
  );
};

export default ReadingProgressBar;
