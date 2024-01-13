import '../styles/global.css';
import tw from 'tailwind-styled-components';
import Logo from './components/Logo/Logo';
import NavBarLinks from './components/NavBar/NavBarLinks/NavBarLinks';

const ListItem = tw.li`
  grid grid-cols-[10%_90%]
`;
const Icon = tw.span`
  pr-[8px]
`;

export default function Home() {
  return (
    <main>
      <div className='flex h-screen w-screen flex-col items-center justify-center overflow-hidden'>
        <div className='animate-glow hidden h-px w-screen animate-fade-left from-neutral-300/0 via-neutral-300/50 to-neutral-300/0 md:block' />
        <h1 className='text-edge-outline z-10 animate-title cursor-default whitespace-nowrap bg-clip-text font-display text-4xl text-transparent duration-1000'>
          <Logo />
        </h1>

        <div className='animate-glow hidden h-px w-screen animate-fade-right from-neutral-300/0 via-neutral-300/50 to-neutral-300/0 md:block' />
        <div className='my-6 animate-fade-in'>
          <ul className='text-md flex flex-col gap-y-2 text-neutral-500'>
            <ListItem>
              <Icon>👨🏻‍💻</Icon>Software Engineer @ Airwallex
            </ListItem>
            <ListItem>
              <Icon>✍🏻</Icon> Writing about what I learn
            </ListItem>
            <ListItem>
              <Icon>📍</Icon>Based in Sydney, AU
            </ListItem>
          </ul>
          <div className='mt-8 flex flex-col gap-y-4'>
            <NavBarLinks />
          </div>
        </div>
      </div>
    </main>
  );
}
