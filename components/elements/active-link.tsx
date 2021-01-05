import React, { FC } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const ActiveLink: FC = ({ href, children }: any) => {
  const router = useRouter();

  let className = children.props.className || '';
  if (router.pathname === href) {
    className = `${className} active`;
  }
  return <Link href={href}>{React.cloneElement(children, { className, href })}</Link>;
};

export default ActiveLink;
