import type { Metadata } from 'next';
import Image from 'next/image';
import PageLayout from './containers/PageLayout/PageLayout';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Insights into engineering, business and life.',
};

export default function Home() {
  return (
    <PageLayout>
      <div className='flex flex-col items-center justify-center text-neutral-700'>
        <div>
          <div>
            <h1 className='mb-4 inline-block bg-teal-300 px-0.5 py-0.5 text-2xl font-bold'>
              I'm Bryan - a software engineer & creative{' '}
            </h1>
            <span className='mb-2 flex items-center'>
              <Image
                src={'/svg/noun-lightning.svg'}
                width={28}
                height={28}
                alt={'lightning'}
                className='mr-[4px]'
              />
              <p className=''>
                Currently building back-end financial infrastructure @{' '}
                <a
                  href='https://www.airwallex.com/au'
                  target='_blank'
                  className='underline'
                >
                  Airwallex
                </a>
              </p>
            </span>
            <span className='mb-4 flex items-center'>
              <Image
                src={'/svg/noun-pin.svg'}
                width={28}
                height={28}
                alt={'pin'}
                className='mr-[4px]'
              />
              <p className=''>Recently based in Sydney, AU</p>
            </span>
          </div>
          <div>
            <div className='flex items-center'>
              <Image
                src='/landing-images/headshot-2.jpg'
                width={500}
                height={500}
                alt='Human jumping'
                className='z-10 border-2'
              />
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
