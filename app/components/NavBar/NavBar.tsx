import Link from 'next/link';
import Logo from '../Logo/Logo';

const navigation = [{ name: 'Blog', href: '/blog' }];

const NavBar = () => {
  return (
    <div className='mx-auto flex w-full max-w-2xl items-center justify-between py-[32px]'>
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
  );
};

export default NavBar;
