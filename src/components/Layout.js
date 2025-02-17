import React from 'react';
import Header from './header';
import './layout.css';

const Layout = ({ children }) => (
  <>
    <Header />
    <main>{children}</main>
  </>
);

export default Layout;
