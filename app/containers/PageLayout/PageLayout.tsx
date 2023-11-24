import NavBar from '../../components/NavBar/NavBar';
const PageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <div className='mx-auto max-w-5xl py-[96px]'>
        <NavBar />
        <div className='ml-[240px] mt-[8px] min-h-[calc(100vh-20vh)]'>
          {children}
        </div>
      </div>
      {/*<Footer />*/}
    </main>
  );
};

export default PageLayout;
