import NavBar from '../../components/NavBar/NavBar';

const PageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <NavBar />
      <div className='mx-auto max-w-2xl'>{children}</div>
    </main>
  );
};

export default PageLayout;
