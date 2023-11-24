'use client';
import { useRouter } from 'next/navigation';

const Logo = () => {
  const router = useRouter();
  return (
    <div className='relative' onClick={() => router.push('/')}>
      <h1 className='ml-[8px] cursor-pointer whitespace-nowrap bg-clip-text font-display text-4xl text-neutral-50 md:text-5xl'>
        BW
      </h1>
      <div className='absolute top-0 z-[-10] !h-[50px] !w-[96px] bg-neutral-900' />
    </div>
  );
};

export default Logo;
