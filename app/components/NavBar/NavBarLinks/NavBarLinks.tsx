import Link from 'next/link';
import { FC } from 'react';

const navigation = [
  {
    name: 'Blog',
    href: '/blog',
    subtitle: 'Engineering, business and personal insights',
    internal: true,
  },
  // {
  //   name: 'Art',
  //   href: 'https://www.instagram.com/b2uyk/',
  //   subtitle: 'View my digital art',
  //   internal: false,
  // },
  // {
  //   name: 'Music',
  //   href: 'https://soundcloud.com/bwyk/',
  //   subtitle: 'View my electronic music',
  //   internal: false,
  // },
];

interface NavigationLinkProps {
  title: string;
  href: string;
  subtitle: string;
  internal?: boolean;
  alternateColor?: boolean;
}

const NavigationLink: FC<NavigationLinkProps> = ({
  title,
  href,
  subtitle,
  internal = false,
  alternateColor = false,
}) => {
  const content = (
    <>
      <dt
        className={`mb-1 flex text-sm font-bold ${
          alternateColor ? 'text-neutral-100' : 'text-neutral-600'
        }`}
      >
        {title.toUpperCase()}
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
      <dd
        className={`font-subtitle text-xs tracking-tight ${
          alternateColor ? 'text-neutral-100' : 'text-neutral-600'
        }`}
      >
        {subtitle}
      </dd>
    </>
  );
  return internal ? (
    <Link href={href} className='no-underline'>
      {content}
    </Link>
  ) : (
    <a href={href} target='_blank' className='no-underline'>
      {content}
    </a>
  );
};

interface NavBarLinksProps {
  alternateColor?: boolean;
}

const NavBarLinks: FC<NavBarLinksProps> = ({ alternateColor = false }) => {
  return (
    <ul className='flex flex-col gap-y-6'>
      {navigation.map((item) => (
        <li
          key={item.name}
          className='tracking-wide transition-all hover:-translate-y-[1px]'
        >
          <NavigationLink
            key={item.href}
            title={item.name}
            href={item.href}
            subtitle={item.subtitle}
            internal={item.internal}
            alternateColor={alternateColor}
          />
        </li>
      ))}
    </ul>
  );
};

export default NavBarLinks;
