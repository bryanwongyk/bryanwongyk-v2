import type { Metadata } from 'next';
import Link from 'next/link';
import { allBlogs } from 'contentlayer/generated';
import PageLayout from '../containers/PageLayout/PageLayout';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Read my thoughts on software development, design, and more.',
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
            className='mb-4 flex flex-col space-y-1'
            href={`/blog/${post.slug}`}
          >
            <div className='flex w-full flex-col'>
              <p className='text-lg tracking-tight text-neutral-900'>
                {post.title}
              </p>
            </div>
          </Link>
        ))}
    </PageLayout>
  );
}
