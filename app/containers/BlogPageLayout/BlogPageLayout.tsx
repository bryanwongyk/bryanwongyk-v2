import NavBar from '../../components/NavBar/NavBar';
import CategoryFilter from '../../blog/CategoryFilter/CategoryFilter';
import Image from 'next/image';
import AuthorAvatar from '../../blog/AuthorAvatar/AuthorAvatar';

const BlogPageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <div className='mx-auto max-w-7xl py-[96px]'>
        <NavBar />
        <div className='ml-[240px] mt-[8px] grid min-h-[calc(100vh-20vh)] grid-cols-[75%_5%_20%]'>
          <div className=''>{children}</div>
          <div />
          <div className=''>
            <AuthorAvatar />
            <CategoryFilter />
          </div>
        </div>
      </div>
    </main>
  );
};

export default BlogPageLayout;
