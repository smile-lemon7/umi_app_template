import React, { Component } from 'react'
import BaseLayout from './baseLayout/index';  // 底部导航的组件
import Login from '@/pages/Login/index';

const ULR_NO_LAYOUT = ['/home', '/classes', '/shopingCart', '/mine'];  //判断在哪几个路由下需要出现底部导航
class Layout extends Component {
  componentDidMount() {
  }
  renderBody = () => {
    const {location: {pathname}, children } = this.props;
    if (ULR_NO_LAYOUT.includes(pathname)) {
      return  (<BaseLayout {...this.props} />);
    }
    if(pathname === '/') {
      return <Login />
    }
    return (
      <React.Fragment>
        {children}
      </React.Fragment>
    );
  }

  render() {
    return (
      <React.Fragment>
        {this.renderBody()}
      </React.Fragment>
    )
  }
}

export default Layout;