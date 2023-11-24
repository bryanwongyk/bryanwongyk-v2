import Head from 'next/head';
import styles from '../../styles/Home.module.css';
import Particles from '../components/Particles/Particles';
import Link from 'next/link';
import { FC } from 'react';

interface NavigationLinkProps {
  title: string;
  subtitle: string;
  href: string;
  internal?: boolean;
}

const NavigationLink: FC<NavigationLinkProps> = ({
  title,
  subtitle,
  href,
  internal = false,
}) => {
  const content = (
    <>
      <dt className='flex font-bold'>
        {title}
        <span className='relative ml-[8px] flex items-center justify-center'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='h-4 w-4'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M8.25 4.5l7.5 7.5-7.5 7.5'
            />
          </svg>
        </span>
      </dt>
      <dd className='font-subtitle text-sm'>{subtitle}</dd>
    </>
  );
  return internal ? (
    <Link href={href}>{content}</Link>
  ) : (
    <a href={href} target='_blank'>
      {content}
    </a>
  );
};

function Home() {
  return (
    <main className='relative min-h-full bg-white'>
      <div className='flex h-screen w-screen flex-col items-center justify-center overflow-hidden via-zinc-600/20'>
        <div>
          <h1 className='text-edge-outline z-10 animate-fade-in cursor-default whitespace-nowrap bg-clip-text font-display text-4xl duration-1000 sm:text-6xl md:text-9xl'>
            BRYAN
          </h1>
          <div className='my-8 animate-fade-in'>
            <h2 className='text-md text-zinc-500 '>
              Currently a Software Engineer @ Airwallex. <br /> Based in Sydney,
              AU.
            </h2>
          </div>
          <div className='flex animate-fade-in flex-col gap-y-4'>
            <NavigationLink
              title={'Blog'}
              subtitle={'Insights into engineering, business and life'}
              href={'/blog'}
              internal
            />
            <NavigationLink
              title={'Art'}
              subtitle={'View my digital art'}
              href={'https://www.instagram.com/b2uyk/'}
            />
            <NavigationLink
              title={'Music'}
              subtitle={'View my electronic music'}
              href={'https://soundcloud.com/bwyk'}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
