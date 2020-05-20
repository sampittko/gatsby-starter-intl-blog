import React from 'react';

const Layout = ({ children }) => {
  return (
    <div className="w-screen">
      {children}
    </div>
  );
};

export default Layout;