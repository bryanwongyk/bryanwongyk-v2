import Link from 'next/link';
import Logo from '../Logo/Logo';

const navigation = [
  { name: 'Blog', internal: true, href: '/blog' },
  { name: 'GitHub', internal: false, href: 'https://github.com/bryanwongyk' },
];

const Footer = () => {
  return (
    <footer className='mx-auto flex w-full max-w-2xl items-center justify-between py-[32px]'>
      <div className='flex w-full items-center justify-between'>
        <div>
          <ul className='flex gap-x-4'>
            {navigation.map((item) => {
              return item.internal ? (
                <Link
                  key={item.href}
                  href={item.href}
                  className='text-md text-zinc-500'
                >
                  {item.name}
                </Link>
              ) : (
                <a
                  href={item.href}
                  target='_blank'
                  className='text-md text-zinc-500'
                >
                  {item.name}
                </a>
              );
            })}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
