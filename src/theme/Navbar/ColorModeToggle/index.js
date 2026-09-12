import React from 'react';
import {useLocation} from '@docusaurus/router';
import OriginalColorModeToggle from '@theme-original/Navbar/ColorModeToggle';

export default function NavbarColorModeToggle(props) {
  const {pathname} = useLocation();
  // The homepage has a fixed dark design; other pages support both themes.
  return pathname === '/' ? null : <OriginalColorModeToggle {...props} />;
}
