import React from 'react';
import { SiderLayout, HeaderLayout, FooterLayout } from '../layout';
import { Layout } from 'antd';

const { Content } = Layout;

class MasterLayout extends React.Component {
  render() {
    return (
      <Layout>
        <SiderLayout />
        <Layout>
          <HeaderLayout />
          <Content> Content </Content>
          <FooterLayout />
        </Layout>
      </Layout>
    );
  }
}

export default MasterLayout;