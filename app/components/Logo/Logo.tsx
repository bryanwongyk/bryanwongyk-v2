'use client';
import { useRouter } from 'next/navigation';
import { FC } from 'react';

interface LogoProps {
  alternate?: boolean;
}

const Logo: FC<LogoProps> = ({ alternate = false }) => {
  const router = useRouter();
  return (
    <div className='relative' onClick={() => router.push('/')}>
      <h1
        className={`cursor-pointer whitespace-nowrap bg-clip-text font-display text-4xl italic lg:text-5xl ${
          alternate ? 'text-cyberpunkYellow-400' : 'text-neutral-800'
        }`}
      >
        BRYAN
      </h1>
      <div className='absolute top-0 z-[-10] !h-[50px] !w-[160px]' />
    </div>
  );
};

export default Logo;
