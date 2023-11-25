import Image from 'next/image';

const AuthorAvatar = () => (
  <div className='mb-8'>
    <h4 className='mb-4 font-medium tracking-wide text-neutral-400'>
      ABOUT ME{' '}
    </h4>
    <Image
      src='/landing-images/headshot-1.jpeg'
      width={125}
      height={125}
      alt='Bryan Wong Avatar'
      className='mb-4 shadow-md'
    />
    <p className='prose-md'>
      Software engineer and creative documenting my engineering and business
      journey
    </p>
  </div>
);

export default AuthorAvatar;
