import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { allBlogs } from 'contentlayer/generated';
import { BlogPost } from '../../components/BlogPost/BlogPost';
import PageLayout from '../../containers/PageLayout/PageLayout';
import { FC } from 'react';

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

function formatDate(date: string) {
  const currentDate = new Date();
  const targetDate = new Date(date);

  const yearsAgo = currentDate.getFullYear() - targetDate.getFullYear();
  const monthsAgo = currentDate.getMonth() - targetDate.getMonth();
  const daysAgo = currentDate.getDate() - targetDate.getDate();

  let formattedDate = '';

  if (yearsAgo > 0) {
    formattedDate = `${yearsAgo}y ago`;
  } else if (monthsAgo > 0) {
    formattedDate = `${monthsAgo}mo ago`;
  } else if (daysAgo > 0) {
    formattedDate = `${daysAgo}d ago`;
  } else {
    formattedDate = 'Today';
  }

  const fullDate = targetDate.toLocaleString('en-us', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  return `${fullDate} (${formattedDate})`;
}

const Blog: FC<BlogProps> = ({ params }) => {
  const post = allBlogs.find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <PageLayout>
      <script
        type='application/ld+json'
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(post.structuredData),
        }}
      />
      <h1 className='mb-4 text-4xl font-semibold tracking-tighter'>
        {post.title}
      </h1>
      <div className='mb-6 flex max-w-[650px] items-center justify-between text-sm'>
        <p className='text-sm text-neutral-400'>
          {formatDate(post.publishedAt)}
        </p>
      </div>
      <BlogPost code={post.body.code} />
    </PageLayout>
  );
};

export default Blog;
