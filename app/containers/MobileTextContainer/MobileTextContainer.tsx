import { children } from 'hastscript/lib/jsx-classic';

const MobileTextContainer = ({ children }: { children: React.ReactNode }) => {
  return <div className='px-[8px]'>{children}</div>;
};

export default MobileTextContainer;
