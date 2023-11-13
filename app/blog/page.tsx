import type { Metadata } from 'next';
import Link from 'next/link';
import { allBlogs } from 'contentlayer/generated';
import PageLayout from '../containers/PageLayout/PageLayout';
import { formatDate } from '../util/formatBlogPostDate';
import { Suspense } from 'react';
import ViewCounter from './ViewCounter/ViewCounter';
import postViewsRepository from '../repository/PostViewsRepository';
import { PostView } from '../repository/entities/PostView';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Insights into engineering, business and life.',
};

const Views = async ({ slug }: { slug: string }) => {
  let views = await postViewsRepository.getAllViews();
  return <ViewCounter allViews={views} slug={slug} trackView={false} />;
};

export default function BlogPage() {
  return (
    <PageLayout>
      {allBlogs
        .sort((a, b) => {
          if (new Date(a.publishedAt) > new Date(b.publishedAt)) {
            return -1;
          }
          return 1;
        })
        .map((post) => (
          <Link
            key={post.slug}
            className='mb-8 flex flex-col space-y-1'
            href={`/blog/${post.slug}`}
          >
            <div className='flex w-full flex-col tracking-tight'>
              <p className='text-lg font-bold text-neutral-900'>{post.title}</p>
              <p className='text-sm text-neutral-600'>{post.summary}</p>
              <p className='mt-1 text-xs text-neutral-400'>
                {formatDate(post.publishedAt)}
              </p>
              <Suspense fallback={<p className='h-5' />}>
                <Views slug={post.slug} />
              </Suspense>
            </div>
          </Link>
        ))}
    </PageLayout>
  );
}
