import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { changeStatusCollapse } from '../../actions';
import { Layout, Icon } from 'antd';

const { Header } = Layout;

class HeaderLayout extends React.PureComponent {

  constructor() {
    super();

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    console.log(1);
    this.props.changeStatusCollapse && changeStatusCollapse(!this.props.collapse);
  }

  render() {
    return (
      <Header>
        <Icon
          style={{background: 'white'}}
          className="trigger"
          type={this.props.collapse ? 'menu-unfold' : 'menu-fold'}
          onClick={this.toggle}
        />
      </Header>
    );
  }
}

HeaderLayout.propTypes = {
  collapse: PropTypes.bool.isRequired,
  changeStatusCollapse: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  collapse: state.common.collapse
});

export default connect(
  mapStateToProps,
  {
    changeStatusCollapse
  }
)(HeaderLayout);