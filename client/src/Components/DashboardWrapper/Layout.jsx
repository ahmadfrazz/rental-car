import React from 'react';

import { Outlet } from 'react-router-dom';
import DashboardWrapper from './DashboardWrapper';

function Layout() {
  return (
    <DashboardWrapper>
      <Outlet />
    </DashboardWrapper>
  );
}

export default Layout;