'use client';

import { PostTag } from '../../types/enums';
import { cleanAndCapitaliseFirstLetterInString } from '../util/cleanAndCapitaliseFirstLetterInString';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

const CategoryFilter = () => {
  const router = useRouter();
  const pathName = usePathname();
  const searchParams = useSearchParams();
  const currentCategory = searchParams.get('category');

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
      className={` cursor-pointer hover:-translate-y-[1px] ${
        pathName == '/blog' &&
        (currentCategory == tag ||
          (!currentCategory && tag == PostTag.All.toString()))
          ? 'text-neutral-300'
          : 'text-neutral-500'
      }`}
      onClick={() => handleCategoryClick(tag)}
    >
      {cleanAndCapitaliseFirstLetterInString(tag)}
    </li>
  ));

  return (
    <div>
      <h4 className='mb-3 font-subtitle font-medium tracking-wide text-neutral-100'>
        // CATEGORIES{' '}
      </h4>
      <ul className='flex flex-col gap-y-1'>{categoryFilters}</ul>
    </div>
  );
};

export default CategoryFilter;
