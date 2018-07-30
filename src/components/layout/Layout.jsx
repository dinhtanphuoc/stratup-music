import React from 'react';
import PropTypes from 'prop-types';
import { SiderLayout, HeaderLayout, FooterLayout } from '../layout';
import { Layout } from 'antd';

const { Content } = Layout;

class MasterLayout extends React.PureComponent {
  render() {
    const { history } = this.props;
    return (
      <div>
        <Layout>
          <SiderLayout
            history={history}
          />
          <Layout>
            <HeaderLayout />
            <Content> {this.props.children} </Content>
          </Layout>
        </Layout>
        <Layout>
          <FooterLayout />
        </Layout>
      </div>
    );
  }
}

MasterLayout.propTypes = {
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired
}


export default MasterLayout;