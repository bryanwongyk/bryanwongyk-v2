import type { Metadata } from 'next';
import Link from 'next/link';
import { allBlogs } from 'contentlayer/generated';
import { formatDate } from './util/formatBlogPostDate';
import { Suspense } from 'react';
import ViewCounter from './ViewCounter/ViewCounter';
import postViewsRepository from '../repository/PostViewsRepository';
import BlogPageLayout from '../containers/BlogPageLayout/BlogPageLayout';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Insights into engineering, business and life.',
};

const Views = async ({ slug }: { slug: string }) => {
  const views = await postViewsRepository.getAllViews();
  return <ViewCounter allViews={views} slug={slug} trackView={false} />;
};

export default function BlogPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const category = searchParams.category;
  return (
    <BlogPageLayout>
      <h1 className='text-md mb-6 inline-block bg-cyberpunkYellow-300 px-2 font-display font-bold tracking-wide text-neutral-600'>
        BLOG
      </h1>
      {allBlogs
        .sort((a, b) => {
          if (new Date(a.publishedAt) > new Date(b.publishedAt)) {
            return -1;
          }
          return 1;
        })
        .filter((post) => (!!category ? post.tag == category : true))
        .filter((post) => post.isPublished)
        .map((post) => (
          <Link
            key={post.slug}
            className='group mb-8 inline-block flex flex-col space-y-1 hover:-translate-y-[1px]'
            href={`/blog/${post.slug}`}
          >
            <div className='flex w-full flex-col tracking-tight'>
              <p className='text-lg font-bold text-neutral-700'>
                <span>{post.title}</span>
              </p>
              <p className='text-md text-neutral-600'>{post.summary}</p>
              <span className='mt-1 flex items-center'>
                <p className='font-subtitle text-sm text-neutral-400'>
                  {formatDate(post.publishedAt).toUpperCase()}
                </p>
                <p className='mx-[8px] text-neutral-600'>·</p>
                <Suspense fallback={<p className='h-5' />}>
                  <Views slug={post.slug} />
                </Suspense>
              </span>
            </div>
          </Link>
        ))}
    </BlogPageLayout>
  );
}
