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
            <h1 className='mb-4 inline-block bg-primaryTeal px-0.5 py-0.5 text-2xl font-bold'>
              I'm Bryan - a software engineer & creative{' '}
            </h1>
            <h2 className='mb-4'>
              Currently building back-end financial infrastructure @{' '}
              <a
                href='https://www.airwallex.com/au'
                target='_blank'
                className='underline'
              >
                Airwallex
              </a>
              .
              <br /> Recently based in Sydney, AU.
            </h2>
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
