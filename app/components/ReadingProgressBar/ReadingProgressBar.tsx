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
      className='fixed left-0 top-0 z-50 h-[8px] bg-teal-500 shadow-md transition-all'
      style={{ width: `${scrollPercentage}%` }}
    />
  );
};

export default ReadingProgressBar;
