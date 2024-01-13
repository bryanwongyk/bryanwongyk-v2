import Logo from '../Logo/Logo';
import NavBarLinks from './NavBarLinks/NavBarLinks';
import { push as Menu } from 'react-burger-menu';
import '../../../styles/react-burger-menu.css';

const MobileNavBar = () => {
  return (
    <nav className='sticky top-0 z-50 mb-[32px] h-[96px] w-full bg-stone-50'>
      <Menu pageWrapId={'page-wrap'} outerContainerId={'outer-container'}>
        <div className='my-[32px]'>
          <Logo alternate={true} />
        </div>
        <NavBarLinks alternateColor={true} />
      </Menu>
      <div className='fixed left-[96px] top-[32px]'>
        <Logo />
      </div>
    </nav>
  );
};

export default MobileNavBar;
