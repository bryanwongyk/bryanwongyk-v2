'use client';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { FC } from 'react';

interface LogoProps {
  size?: number;
  transparentBackground?: boolean;
}

const Logo: FC<LogoProps> = ({ size = 75, transparentBackground = false }) => {
  const router = useRouter();
  const logoImage = transparentBackground
    ? '/logo-transparent-bg.png'
    : '/logo.png';
  return (
    <div className='relative' onClick={() => router.push('/')}>
      <Image
        src={logoImage}
        width={size}
        height={size}
        alt='Bryan Wong Logo'
        className='cursor-pointer'
      />
    </div>
  );
};

export default Logo;
