import React, { FC } from 'react';
// next imports
import { useRouter } from 'next/router';
// components
import { NavigationToolbar } from 'components/toolbars';

const SiteLayout: FC = ({ children }) => {
  const router = useRouter();
  if (router.pathname === '/') {
    return <div>{children}</div>;
  }

  return (
    <div className="pt-4">
      <NavigationToolbar />
      {children}
    </div>
  );
};

export default SiteLayout;
