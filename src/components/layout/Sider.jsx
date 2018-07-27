import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Layout } from 'antd';

const { Sider } = Layout;

class SiberLayout extends React.PureComponent {

  render() {
    return (
      <Sider
        trigger={null}
        collapsible
        collapsed={this.props.collapse}
      >
        Sider
      </Sider>
    );
  }
}

SiberLayout.propTypes = {
  collapse: PropTypes.bool.isRequired
}

const mapStateToProps = state => ({
  collapse: state.common.collapse
});

export default connect(
  mapStateToProps,
  null
)(SiberLayout);