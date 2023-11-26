'use client';

import NavBar from '../../components/NavBar/NavBar';
import MobileNavBar from '../../components/NavBar/MobileNavBar';
import { BREAKPOINTS } from '../../util/breakpoints';
import useBreakpoint from 'use-breakpoint';

const PageLayout = ({ children }: { children: React.ReactNode }) => {
  const { breakpoint } = useBreakpoint(BREAKPOINTS);
  return (
    <main>
      {breakpoint == null ? null : (
        <div
          id='outer-container'
          className='mx-auto max-w-7xl sm:px-[16px] sm:pt-[96px] lg:px-[48px]'
        >
          {breakpoint == 'mobile' ? <MobileNavBar /> : <NavBar />}
          <div
            id='page-wrap'
            className='mt-[24px] sm:mb-[54px] sm:ml-[240px] sm:mt-0'
          >
            {children}
          </div>
        </div>
      )}
    </main>
  );
};

export default PageLayout;
