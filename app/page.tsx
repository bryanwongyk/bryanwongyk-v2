import type { Metadata } from 'next';
import Image from 'next/image';
import PageLayout from './containers/PageLayout/PageLayout';
import MobileTextContainer from './containers/MobileTextContainer/MobileTextContainer';
import Link from 'next/link';
import '../styles/global.css';
import tw from 'tailwind-styled-components';
import ExternalLink from './components/ExternalLink/ExternalLink';

const UnorderedList = tw.ul`
  ml-[32px]
`;
const ListItem = tw.li`
  list-disc
`;
const SubHeading = tw.h4`
  text-md mb-4 tracking-wide text-neutral-500
`;
const SubHeadingIcon = tw.span`
  pr-[8px]
`;
const Paragraph = tw.p`ml-[8px]`;

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Insights into engineering, business and life.',
};

export default function Home() {
  return (
    <PageLayout>
      <div className='mt-[4px]'>
        <div className='w-full'>
          <div>
            <MobileTextContainer>
              <h2 className='mb-6 w-full pb-4 text-2xl font-bold tracking-tight'>
                Welcome to my digital space where I document and share what I'm
                working on
              </h2>
            </MobileTextContainer>
          </div>
        </div>
        <div>
          <div className='flex items-center'>
            <Image
              src='/headshots/headshot-2.jpg'
              width={500}
              height={500}
              alt='Bryan'
              className='z-10 border-2 border-black'
            />
          </div>
        </div>
        <div className='mb-10 mt-6 gap-x-12'>
          <div>
            <MobileTextContainer>
              <div className='flex flex-col gap-y-12'>
                <div>
                  <SubHeading>👨🏻‍💻 WORKING ON</SubHeading>
                  <UnorderedList>
                    <ListItem>
                      {'Building back-end financial infrastructure @'}{' '}
                      <ExternalLink href='https://www.airwallex.com/au'>
                        Airwallex
                      </ExternalLink>
                    </ListItem>
                    <ListItem>
                      Writing about what I learn{' '}
                      <Link href='/blog' className='underline'>
                        on my blog
                      </Link>
                    </ListItem>
                    <ListItem>
                      Taking a temporary break from building projects in my
                      spare time
                    </ListItem>
                  </UnorderedList>
                </div>
                <div>
                  <SubHeading>
                    <SubHeadingIcon>🌱</SubHeadingIcon> LEARNING ABOUT
                  </SubHeading>
                  <Paragraph>How to become a killer engineer</Paragraph>
                </div>
                <div>
                  <SubHeading>
                    <SubHeadingIcon>🎧</SubHeadingIcon> HOBBIES
                  </SubHeading>
                  <UnorderedList>
                    <ListItem>Going to the gym</ListItem>
                    <ListItem>
                      Listening to music and dabbling in making it once every
                      blue moon
                    </ListItem>
                    <ListItem>
                      Admiring great food, story-telling and art - everything
                      that make us human
                    </ListItem>
                  </UnorderedList>
                </div>
                <div>
                  <SubHeading>
                    <SubHeadingIcon>📍</SubHeadingIcon> LIVING IN
                  </SubHeading>
                  <Paragraph>Sydney, AU (originally from Melbourne)</Paragraph>
                </div>
              </div>
            </MobileTextContainer>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
