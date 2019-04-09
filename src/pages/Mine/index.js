import React, { Component } from 'react';
import { connect } from 'dva';
import { Flex } from 'antd-mobile';


class MinePage extends Component {
  
  state = {};
 
  render() {
    return (<Flex justify="center">用户中心</Flex>)
  }
}

export default connect()(MinePage);
