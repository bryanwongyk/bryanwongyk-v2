'use client';
import { useRouter } from 'next/navigation';
import { FC } from 'react';

interface LogoProps {
  alternate?: boolean;
  hasBackground?: boolean;
}

const Logo: FC<LogoProps> = ({ alternate = false, hasBackground = false }) => {
  const router = useRouter();
  return (
    <div
      className={`relative inline-block ${
        hasBackground ? 'bg-primary-400 pl-[8px] pr-[16px]' : ''
      }`}
      onClick={() => router.push('/')}
    >
      <h1
        className={`cursor-pointer whitespace-nowrap bg-clip-text font-display text-4xl italic lg:text-5xl ${
          alternate ? 'text-primary-400' : 'text-neutral-800'
        }`}
      >
        BRYAN
      </h1>
      <div className='absolute top-0 z-[-10] !h-[50px] !w-[160px]' />
    </div>
  );
};

export default Logo;
