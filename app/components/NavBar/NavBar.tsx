import Link from 'next/link';
import Logo from '../Logo/Logo';
import { FC } from 'react';
import Image from 'next/image';
import NavBarLinks from './NavBarLinks/NavBarLinks';
import { isMobile } from 'react-device-detect';

const NavBar = () => {
  return (
    <div className='mb-8 ml-12 inline-block w-full sm:fixed sm:w-[180px]'>
      <div className='flex w-full max-w-2xl flex-col'>
        <span>
          <Logo />
        </span>
        <nav className='mt-6'>
          <NavBarLinks />
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
