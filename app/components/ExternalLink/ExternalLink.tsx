import React, { FC } from 'react';

interface ExternalLinkProps {
  href: string;
  children: React.ReactNode;
}

const ExternalLink: FC<ExternalLinkProps> = ({ href, children }) => {
  return (
    <a href={href} target='_blank' className='underline'>
      {children}
    </a>
  );
};

export default ExternalLink;
