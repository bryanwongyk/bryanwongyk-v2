import Image from 'next/image';

const AuthorBio = () => (
  <div className='mb-8'>
    <h4 className='mb-2 font-display tracking-wide text-neutral-600'>
      {'ABOUT ME'}{' '}
    </h4>
    <Image
      src='/headshots/headshot-1.jpeg'
      width={125}
      height={125}
      alt='Bryan Wong Avatar'
      className='mb-3 shadow-md'
    />
    <p className='prose-md text-neutral-500'>Software engineer and creator</p>
  </div>
);

export default AuthorBio;
