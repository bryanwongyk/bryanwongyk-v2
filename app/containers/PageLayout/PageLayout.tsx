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
        <div id='outer-container' className='mx-auto max-w-7xl sm:py-[96px]'>
          {breakpoint == 'mobile' ? <MobileNavBar /> : <NavBar />}
          <div
            id='page-wrap'
            className=' my-[54px] min-h-[calc(100vh-20vh)] sm:ml-[240px]'
          >
            {children}
          </div>
        </div>
      )}
    </main>
  );
};

export default PageLayout;
