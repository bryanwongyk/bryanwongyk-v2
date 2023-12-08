import Logo from '../Logo/Logo';
import NavBarLinks from './NavBarLinks/NavBarLinks';

const NavBar = () => {
  return (
    <div className='mb-8 inline-block h-full w-full px-[12px] sm:fixed sm:w-[180px] lg:w-[240px]'>
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
