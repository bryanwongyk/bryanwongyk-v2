import Link from 'next/link';

// @ts-ignore - ignore interface type assertion
const HeadingAnchor = ({ headingLevel, ...props }) => {
  const link = `#${props.id}`;
  const text = props.children[1];
  const DynamicHeading = `h${headingLevel}`;

  return (
    <Link href={link} className='group relative inline no-underline'>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        strokeWidth={1.5}
        stroke='currentColor'
        className='absolute -left-8 top-[5px] h-5 w-5 opacity-0 transition-opacity group-hover:opacity-60'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244'
        />
      </svg>
      {/*@ts-ignore - ignore type assertion*/}
      <DynamicHeading id={props.id} className='relative flex items-center'>
        {text}
      </DynamicHeading>
    </Link>
  );
};

export default HeadingAnchor;
