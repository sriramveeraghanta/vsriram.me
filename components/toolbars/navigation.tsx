import React, { FC } from 'react';
// next
import { useRouter } from 'next/router';
// component
import { ActiveLink } from 'components/elements';
// framer motion
import { motion } from 'framer-motion';

const navigationList = [
  {
    path: '/',
    title: 'About',
    color: '#D32F2F'
  },
  {
    path: '/skills',
    title: 'Skills',
    color: '#E64A19'
  },
  {
    path: '/education',
    title: 'Education',
    color: '#7B1FA2'
  },
  {
    path: '/experience',
    title: 'Experience',
    color: '#303F9F'
  },
  {
    path: '/work',
    title: 'My Work',
    color: '#0277BD'
  },
  {
    path: '/blog',
    title: 'Blog',
    color: '#00796B'
  },
  {
    path: '/contact',
    title: 'Contact',
    color: '#F57C00'
  }
];

const NavigationToolbar: FC = () => {
  const router = useRouter();

  return (
    <ul className="main-nav">
      {navigationList.map(({ title, path, color }, index) => (
        <motion.li
          key={index}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
        >
          <ActiveLink href={path}>
            <a style={{ color: router.pathname === path ? color : 'inherit' }}>{title}</a>
          </ActiveLink>
          {router.pathname === path && (
            <motion.div
              className="underline"
              layoutId="underline"
              style={{ backgroundColor: color }}
            />
          )}
        </motion.li>
      ))}
    </ul>
  );
};

export default NavigationToolbar;
