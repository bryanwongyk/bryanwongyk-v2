import LocalFont from '@next/font/local';
import { IBM_Plex_Mono } from '@next/font/google';

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400'],
});

const calSans = LocalFont({
  src: '../../../public/fonts/CalSans-SemiBold.ttf',
  variable: '--font-calsans',
});

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className={`h-full font-sans ${calSans.className} ${ibmPlexMono.className}`}
    >
      {children}
    </div>
  );
};

export default Layout;
