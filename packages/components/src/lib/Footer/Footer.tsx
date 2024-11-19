import { PropsWithChildren } from 'react';

const Footer = ({children}: PropsWithChildren) => {
  return <div className="flex justify-center gap-4 p-8">{children}</div>;
};

export default Footer;
