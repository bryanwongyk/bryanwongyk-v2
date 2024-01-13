'use client';

import NavBar from '../../components/NavBar/NavBar';
import CategoryFilter from '../../blog/CategoryFilter/CategoryFilter';
import AuthorBio from '../../blog/AuthorBio/AuthorBio';
import MobileNavBar from '../../components/NavBar/MobileNavBar';
import useBreakpoint from 'use-breakpoint';
import { BREAKPOINTS } from '../../util/breakpoints';
import MobileTextContainer from '../MobileTextContainer/MobileTextContainer';

const BlogPageLayout = ({ children }: { children: React.ReactNode }) => {
  const { breakpoint } = useBreakpoint(BREAKPOINTS);
  return (
    <main>
      {breakpoint == null ? null : (
        <div
          id='outer-container'
          className='mx-auto max-w-[88rem] sm:px-[16px] sm:pt-[96px] lg:px-[48px]'
        >
          {breakpoint == 'mobile' ? <MobileNavBar /> : <NavBar />}
          <div
            id='page-wrap'
            className='mt-[8px] flex min-h-[calc(100vh-20vh)] flex-col gap-y-4 sm:ml-[200px] lg:ml-[280px] xl:grid xl:grid-cols-[75%_5%_20%]'
          >
            <MobileTextContainer additionalClassNames={'mb-[16px]'}>
              {children}
            </MobileTextContainer>
            <div />
            <section>
              <MobileTextContainer>
                <div className='mb-[16px] rounded-2xl pb-[32px] xl:mx-auto xl:w-[230px] xl:px-[32px]'>
                  <AuthorBio />
                  <CategoryFilter />
                </div>
              </MobileTextContainer>
            </section>
          </div>
        </div>
      )}
    </main>
  );
};

export default BlogPageLayout;
