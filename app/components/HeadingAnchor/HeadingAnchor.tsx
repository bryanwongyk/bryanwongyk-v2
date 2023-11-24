import { FC, ReactNode } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';

const getAnchor = (text: any) => {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]/g, '')
    .replace(/[]/g, '-');
};

const HeadingAnchor = (props: any) => {
  // const anchor = getAnchor(text);
  const link = `#${props.id}`;
  const text = props.children[1];

  return (
    <Link href={link} className='group relative inline no-underline'>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        strokeWidth={1.5}
        stroke='currentColor'
        className='absolute -left-8 top-[3px] h-6 w-6 opacity-0 transition-opacity group-hover:opacity-60'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244'
        />
      </svg>
      <h2 id={props.id} className='relative flex items-center'>
        {text}
      </h2>
    </Link>
  );
};

export default HeadingAnchor;
