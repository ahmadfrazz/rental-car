import React from 'react';
import { Layout } from 'antd';
import Header from '../Header/Header';

function TopNav({ children }) {
  return (
    <div>
        <Layout>
            <Header />
        </Layout>
        <div style={{paddingInline: '10%'}}>{children}</div>
    </div>
  )
}

export default TopNav;