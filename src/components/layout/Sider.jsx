import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Layout, Menu, Icon } from 'antd';

const { Sider } = Layout;
const { SubMenu } = Menu;

const handleMenu = (data) => {
  return data.map(item => {
    if (item.subMenu.length === 0) {
      return (
        <Menu.Item key={item.key} path={item.path}>
          <Icon type={item.icon} />
          <span>{item.name}</span>
        </Menu.Item>
      )
    } else {
      return (
        <SubMenu key={item.key} title={<span><Icon type={item.icon} /><span>{item.name}</span></span>}>
          { handleMenu(item.subMenu) }
        </SubMenu>
      )
    }
  });
}

class SiberLayout extends React.PureComponent {
  constructor() {
    super();

    this.onClickMenu = this.onClickMenu.bind(this);
  }

  onClickMenu(e) {
    if (e && e.item && e.item.props && e.item.props.path) {
      this.props.history.push(e.item.props.path);
    }
  }
  render() {
    const { collapse, menu } = this.props;
    return (
      <Sider
        className="sider-container"
        trigger={null}
        collapsible
        collapsed={collapse}
        multiple={false}
      >
        <div className="sider-logo">
          <Menu
            className="sider-menu-logo"
            mode="inline"
            theme="dark"
            inlineCollapsed={collapse}
            onClick={this.onClickMenu}
          >
            <Menu.Item className="sider-menu-item-logo" path="/">
              <Icon type="global" />
              <span className="sider-name-logo">DTP_MUSIC</span>
            </Menu.Item>
          </Menu>
        </div>
        <Menu
          className="sider-menu-container"
          defaultSelectedKeys={['2']}
          mode="inline"
          theme="dark"
          inlineCollapsed={collapse}
          onClick={this.onClickMenu}
        >
          { handleMenu(menu) }
        </Menu>
      </Sider>
    );
  }
}

SiberLayout.propTypes = {
  collapse: PropTypes.bool.isRequired,
  menu: PropTypes.array.isRequired,
  history: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  collapse: state.common.collapse,

  menu: state.menu.menu
});

export default connect(
  mapStateToProps,
  null
)(SiberLayout);