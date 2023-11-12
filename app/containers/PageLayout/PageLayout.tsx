import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';

const PageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <NavBar />
      <div className='mx-auto min-h-[calc(100vh-20vh)] max-w-2xl'>
        {children}
      </div>
      <Footer />
    </main>
  );
};

export default PageLayout;
