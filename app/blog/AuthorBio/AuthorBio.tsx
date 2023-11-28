import Image from 'next/image';

const AuthorBio = () => (
  <div className='mb-8'>
    <h4 className='mb-4 font-subtitle font-medium tracking-wide text-neutral-100'>
      // ABOUT ME{' '}
    </h4>
    <Image
      src='/headshots/headshot-1.jpeg'
      width={125}
      height={125}
      alt='Bryan Wong Avatar'
      className='mb-4 shadow-md'
    />
    <p className='prose-md text-neutral-400'>
      I'm Bryan - a software engineer and creator
    </p>
  </div>
);

export default AuthorBio;
