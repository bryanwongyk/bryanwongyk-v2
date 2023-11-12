'use client';
import { useRouter } from 'next/navigation';

const Logo = () => {
  const router = useRouter();
  return (
    <div onClick={() => router.push('/')}>
      <h1 className='text-edge-outline z-10 cursor-pointer whitespace-nowrap bg-clip-text font-display text-4xl md:text-5xl'>
        BW
      </h1>
    </div>
  );
};

export default Logo;
