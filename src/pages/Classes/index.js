import React, { Component } from 'react';
import { connect } from 'dva';
import { Flex } from 'antd-mobile';


class ClassesPage extends Component {
  
  state = {};
 
  render() {
    return (<Flex justify="center">分类</Flex>)
  }
}

export default connect()(ClassesPage);
