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
          className='mx-auto max-w-[88rem] sm:px-[16px] sm:pt-[96px] lg:px-[48px]'
        >
          {breakpoint == 'mobile' ? <MobileNavBar /> : <NavBar />}
          <div
            id='page-wrap'
            className='mt-[24px] pb-[64px] sm:ml-[200px] sm:mt-0 lg:ml-[280px]'
          >
            {children}
          </div>
        </div>
      )}
    </main>
  );
};

export default PageLayout;
