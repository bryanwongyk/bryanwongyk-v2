import Logo from '../Logo/Logo';
import NavBarLinks from './NavBarLinks/NavBarLinks';
import { push as Menu } from 'react-burger-menu';
import '../../../styles/react-burger-menu.css';

const MobileNavBar = () => {
  return (
    <nav className='h-[48px]'>
      <Menu pageWrapId={'page-wrap'} outerContainerId={'outer-container'}>
        <Logo size={44} transparentBackground={true} />
        <NavBarLinks />
      </Menu>
      <div className='fixed left-[96px] top-[36px]'>
        <Logo size={44} />
      </div>
    </nav>
  );
};

export default MobileNavBar;
