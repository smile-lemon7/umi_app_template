import React, { Component } from 'react';
import { connect } from 'dva';
import { Flex } from 'antd-mobile';


class HomePage extends Component {
  
  state = {};
 
  render() {
    return (<Flex justify="center">home</Flex>)
  }
}

export default connect()(HomePage);
