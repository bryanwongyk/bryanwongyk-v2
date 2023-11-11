import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Particles from '../app/components/Particles/Particles';
import Link from 'next/link';
import { FC } from 'react';

interface NavigationLinkProps {
  title: string;
  subtitle: string;
  href: string;
}

const NavigationLink: FC<NavigationLinkProps> = ({ title, subtitle, href }) => (
  <Link href={href}>
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
  </Link>
);

export default function Home() {
  return (
    <main className='relative min-h-full bg-white'>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='flex h-screen w-screen flex-col items-center justify-center overflow-hidden via-zinc-600/20'>
        {/*<nav className="my-16 animate-fade-in">*/}
        {/*    <ul className="flex items-center justify-center gap-4">*/}
        {/*        {navigation.map((item) => (*/}
        {/*            <Link*/}
        {/*                key={item.href}*/}
        {/*                href={item.href}*/}
        {/*                className="text-sm duration-500 text-zinc-500 hover:text-zinc-300"*/}
        {/*            >*/}
        {/*                {item.name}*/}
        {/*            </Link>*/}
        {/*        ))}*/}
        {/*    </ul>*/}
        {/*</nav>*/}
        <div className='animate-glow hidden h-px w-screen animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0 md:block' />
        <h1 className='text-edge-outline z-10 animate-title cursor-default whitespace-nowrap bg-clip-text font-display text-4xl text-transparent duration-1000 sm:text-6xl md:text-9xl '>
          BW
        </h1>

        <div className='animate-glow hidden h-px w-screen animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0 md:block' />
        <div className='my-8 animate-fade-in'>
          <h2 className='text-md text-zinc-500 '>
            Currently a Software Engineer @ Airwallex. <br /> Based in Sydney,
            AU.
          </h2>
        </div>
        <div className='flex animate-fade-in flex-col gap-y-4'>
          <NavigationLink
            title={'BLOG'}
            subtitle={'Insights into engineering, business and life'}
            href={'/blog'}
          />
          <NavigationLink
            title={'ART'}
            subtitle={'View my digital art'}
            href={'/blog'}
          />
          <NavigationLink
            title={'MUSIC'}
            subtitle={'View my electronic music'}
            href={'/blog'}
          />
        </div>
      </div>

      {/*<div className='w-full h-screen flex justify-center align-center bg-gradient-to-tl from-black via-zinc-600/20 to-black'>*/}
      {/*    <h1 className="z-10 text-4xl text-neutral-50 duration-1000 text-edge-outline animate-title font-display sm:text-6xl md:text-9l whitespace-nowrap bg-clip-text font-bold">*/}
      {/*        bryan wong*/}
      {/*    </h1>*/}
      {/*</div>*/}
      {/*<Particles*/}
      {/*    className="absolute inset-0 animate-fade-in"*/}
      {/*    quantity={100}*/}
      {/*/>*/}
    </main>
  );
}
