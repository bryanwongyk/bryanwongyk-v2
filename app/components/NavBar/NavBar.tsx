import Link from 'next/link';
import Logo from '../Logo/Logo';

const navigation = [{ name: 'Blog', href: '/blog' }];

const NavBar = () => {
  return (
    <div className='sticky top-0 mx-auto mb-[40px] flex w-full justify-center border-b-2 border-b-black bg-white py-[32px]'>
      <div className='flex w-full max-w-2xl items-center justify-between'>
        <Logo />
        <nav>
          <ul className=''>
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className='text-md text-zinc-500'
              >
                {item.name}
              </Link>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
