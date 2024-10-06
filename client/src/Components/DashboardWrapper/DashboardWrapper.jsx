import React from 'react';
import TopNav from './TopNav';

function DashboardWrapper({ children }) {
  return <TopNav children={children} />;
}

export default DashboardWrapper;