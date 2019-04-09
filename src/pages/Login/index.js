import React, { Component } from 'react';
import { connect } from 'dva';
import router from 'umi/router';
import { Flex, InputItem, Icon,  Button, WingBlank } from 'antd-mobile';
import styles from './index.less';

class LoginPage extends Component {
  render() {
    const { login } = this.props;
    return (
      <WingBlank size="lg" style={{height: '100%'}}>
        <Button type="primary" size="large" 
          onClick={login}>登录</Button>
      </WingBlank>
    );
  }
}

LoginPage.defaultProps = {

};

const mapDispatchToProps = (dispatch) => ({
 login() {
  router.push('/home')
 }
})

export default connect(()=>({}), mapDispatchToProps)(LoginPage);
