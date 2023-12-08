/* eslint-disable  @typescript-eslint/no-explicit-any */
import Link from 'next/link';
import Image from 'next/image';
import { useMDXComponent } from 'next-contentlayer/hooks';
import HeadingAnchor from '../HeadingAnchor/HeadingAnchor';

const CustomLink = (props: any) => {
  const href = props.href;

  if (href.startsWith('/')) {
    return (
      <Link href={href} {...props}>
        {props.children}
      </Link>
    );
  }

  if (href.startsWith('#')) {
    return <a {...props} />;
  }

  return <a target='_blank' rel='noopener noreferrer' {...props} />;
};

const RoundedImage = (props: any) => {
  return <Image alt={props.alt} className='rounded-lg shadow-xl' {...props} />;
};

const PostHeader = (props: any) => {
  return <h1 className='bg-cyberpunkYellow-300' {...props} />;
};

const Callout = (props: any) => {
  return (
    <div className='mb-8 flex items-center rounded border border-neutral-200 bg-neutral-50 p-1 px-4 py-3 text-sm text-neutral-900'>
      <div className='mr-4 flex w-4 items-center'>{props.emoji}</div>
      <div className='callout w-full'>{props.children}</div>
    </div>
  );
};

const components = {
  Image: RoundedImage,
  a: CustomLink,
  Callout,
  h1: PostHeader,
  h2: (props: any) => <HeadingAnchor headingLevel={2} {...props} />,
  h3: (props: any) => <HeadingAnchor headingLevel={3} {...props} />,
};

export function BlogPost({ code }: { code: string }) {
  const Component = useMDXComponent(code);

  return (
    <article className='prose max-w-full'>
      <Component components={components} />
    </article>
  );
}
