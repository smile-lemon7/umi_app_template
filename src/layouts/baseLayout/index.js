import { TabBar } from 'antd-mobile';
import { Component } from "react";
import styles from './index.less';
import router from 'umi/router';

const tabs = [
  {
    title: '首页',
    icon: require('../../assets/home.png'),
    curIcon: require('../../assets/home_selected.png'),
    url: '/home',
  }, 
  {
    title: '分类',
    icon: require('../../assets/classes.png'),
    curIcon: require('../../assets/classes_selected.png'),
    url: '/classes',
  }, 
  {
    title: '购物车',
    icon: require('../../assets/shoping_cart.png'),
    curIcon: require('../../assets/shoping_cart_selected.png'),
    url: '/shopingCart',
  }, 
  {
    title: '个人中心',
    icon: require('../../assets/mine.png'),
    curIcon: require('../../assets/mine_selected.png'),
    url: '/mine',
  },
];

class BaseLayout extends Component {

  isTabBarSelect = (url) => {
    const {location: {pathname}} = this.props;
    return pathname === url
  }
  render() {
    return (
      <div className={styles.baseLayout}>
      <TabBar
        unselectedTintColor="#949494"
        tintColor="#13D1BE"
        barTintColor="white"
        tabBarPosition='bottom'
      >
        {tabs.map(tab => {
            const isSelect = this.isTabBarSelect(tab.url);
            return  (<TabBar.Item
                title={tab.title}
                key={tab.title}
                icon={<div style={{
                  width: '22px',
                  height: '22px',
                  background: `url(${tab.icon}) center center /  21px 21px no-repeat` }}
                />
                }
                selectedIcon={<div style={{
                  width: '22px',
                  height: '22px',
                  background: `url(${tab.curIcon}) center center /  21px 21px no-repeat` }}
                />
                }
                onPress={() => {
                  router.push(tab.url);
                }}
                selected={isSelect}
                data-seed="logId"
              >
                {isSelect && this.props.children}
              </TabBar.Item>
            )
          })
        }
      </TabBar>
      </div>
    );
  }
}

export default BaseLayout;