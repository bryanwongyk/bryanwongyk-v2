'use client';

import { PostTag } from '../../types/enums';
import { cleanAndCapitaliseFirstLetterInString } from '../util/cleanAndCapitaliseFirstLetterInString';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

const CategoryFilter = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleCategoryClick = (tag: string) => {
    if (tag == PostTag.All.toString()) {
      router.push(`/blog`);
    } else {
      const current = new URLSearchParams(Array.from(searchParams.entries()));
      current.set('category', tag);

      const search = current.toString();
      const query = search ? `?${search}` : '';
      router.push(`/blog/${query}`);
    }
  };

  const categoryFilters = Object.values(PostTag).map((tag) => (
    <li
      key={tag}
      className='cursor-pointer hover:-translate-y-[1px]'
      onClick={() => handleCategoryClick(tag)}
    >
      {cleanAndCapitaliseFirstLetterInString(tag)}
    </li>
  ));

  return (
    <div>
      <h4 className='mb-3 font-medium tracking-wide text-neutral-400'>
        CATEGORIES{' '}
      </h4>
      <ul className='flex flex-col gap-y-1'>{categoryFilters}</ul>
    </div>
  );
};

export default CategoryFilter;
