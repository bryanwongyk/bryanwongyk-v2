import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { allBlogs } from 'contentlayer/generated';
import { BlogPost } from '../../components/BlogPost/BlogPost';
import PageLayout from '../../containers/PageLayout/PageLayout';
import { createRef, FC, Suspense } from 'react';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import { formatDateWithTimeAgo } from '../../util/formatBlogPostDate';
import ViewCounter from '../ViewCounter/ViewCounter';
import postViewsRepository from '../../repository/PostViewsRepository';
export const dynamic = 'force-static';

type BlogProps = {
  params: { slug: string };
};

export const generateMetadata = async ({
  params,
}: BlogProps): Promise<Metadata> => {
  const post = allBlogs.find((post) => post.slug === params.slug);
  if (!post) {
    notFound();
  }

  const {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
    slug,
  } = post;
  const ogImage = image as string;
  // ? `https://leerob.io${image}`
  // : `https://leerob.io/og?title=${title}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime,
      url: `https://bryanwongyk.com/blog/${slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  };
};

const Views = async ({ slug }: { slug: string }) => {
  let views = await postViewsRepository.getAllViews();
  return <ViewCounter allViews={views} slug={slug} trackView />;
};

const Blog: FC<BlogProps> = ({ params }) => {
  const post = allBlogs.find((post) => post.slug === params.slug);
  if (!post) {
    notFound();
  }

  return (
    <>
      <PageLayout>
        <script
          type='application/ld+json'
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(post.structuredData),
          }}
        />
        <Breadcrumbs
          pages={[
            {
              name: 'Blog',
              href: '/blog',
              current: false,
            },
            {
              name: post.title,
              href: `/blog/${post.slug}`,
              current: true,
            },
          ]}
        />
        <h1 className='mb-6 mt-10 text-2xl font-semibold tracking-tighter'>
          {post.title}
        </h1>
        <div className='mb-6 flex max-w-2xl items-center justify-between text-sm'>
          <p className='font-subtitle text-sm text-neutral-400'>
            {formatDateWithTimeAgo(post.publishedAt)}
          </p>
          <Suspense fallback={<p className='h-5' />}>
            <Views slug={post.slug} />
          </Suspense>
        </div>
        <BlogPost code={post.body.code} />
      </PageLayout>
    </>
  );
};

export default Blog;
