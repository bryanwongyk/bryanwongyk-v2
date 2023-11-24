import { FC } from 'react';
import { ChevronRightIcon } from '@heroicons/react/20/solid';

export type BreadcrumbsPage = {
  href: string;
  current: boolean;
  name: string;
};

interface BreadcrumbsProps {
  pages: BreadcrumbsPage[];
}

const Breadcrumbs: FC<BreadcrumbsProps> = ({ pages }) => {
  return (
    <nav className='flex font-subtitle' aria-label='Breadcrumb'>
      <ol role='list' className='flex items-center space-x-4'>
        {pages.map((page, index) => (
          <li key={page.name}>
            <div className='flex items-center'>
              {index > 0 && (
                <svg
                  className='mr-4 h-5 w-5 flex-shrink-0 text-neutral-300'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  aria-hidden='true'
                >
                  <path d='M5.555 17.776l8-16 .894.448-8 16-.894-.448z' />
                </svg>
              )}
              <a
                href={page.href}
                className='text-sm font-medium text-neutral-500 hover:text-neutral-700'
                aria-current={page.current ? 'page' : undefined}
              >
                {page.name}
              </a>
            </div>
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
