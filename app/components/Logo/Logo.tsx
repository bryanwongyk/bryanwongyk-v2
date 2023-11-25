'use client';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const Logo = () => {
  const router = useRouter();
  return (
    <div className='relative' onClick={() => router.push('/')}>
      <Image
        src='/logo.png'
        width={75}
        height={75}
        alt='Bryan Wong Logo'
        className='cursor-pointer'
      />
      {/*<h1 className='ml-[8px] cursor-pointer whitespace-nowrap bg-clip-text font-display text-4xl text-neutral-50 md:text-5xl'>*/}
      {/*  BRYAN*/}
      {/*</h1>*/}
      {/*<div className='absolute top-0 z-[-10] !h-[50px] !w-[160px] bg-neutral-900' />*/}
    </div>
  );
};

export default Logo;
