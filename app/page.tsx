import type { Metadata } from 'next';
import Image from 'next/image';
import PageLayout from './containers/PageLayout/PageLayout';
import MobileTextContainer from './containers/MobileTextContainer/MobileTextContainer';

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
            <MobileTextContainer>
              <h1 className='mb-6 inline-block px-0.5 py-0.5 font-subtitle text-2xl font-bold tracking-tighter'>
                I'm Bryan - a software engineer & creator{' '}
              </h1>
            </MobileTextContainer>
          </div>
          <div>
            <div className='flex items-center'>
              <Image
                src='/landing-images/headshot-2.jpg'
                width={500}
                height={500}
                alt='Human jumping'
                className='z-10 border-[1px] border-y-cyberpunkYellow-400 sm:border-[4px]'
              />
            </div>
          </div>
          <div>
            <MobileTextContainer>
              <div className='mb-10 mt-6 flex flex-col gap-y-2 font-subtitle'>
                <p>
                  // Currently building back-end financial infrastructure @{' '}
                  <a
                    href='https://www.airwallex.com/au'
                    target='_blank'
                    className='underline'
                  >
                    Airwallex
                  </a>
                </p>
                <p>// Sydney, AU</p>
              </div>
            </MobileTextContainer>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
