/*
 * @Author: jonty
 * @Date: 2022-02-15 20:17:55
 * @LastEditTime: 2022-02-24 22:34:44
 * @Description: 
 * @Reference: 
 * @FilePath: \in100days\src\pages\iLayout.js
 */
import React from 'react';
import { Layout, Menu, Breadcrumb, Avatar, Dropdown, message } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined, DownOutlined } from '@ant-design/icons';
import './iLayout.css' // 引入一个css
import { Outlet, useNavigate } from 'react-router-dom'
import { menu } from '../routes/menu'

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

export function ILayout(props) {

    console.log(menu);

    const subMenu = menu[0].children

    let navigate = useNavigate()

    const onAvatarMenuClick = ({ key }) => {
        message.info(`Click on item ${key}`);
    };

    const onSubMenuClick = (path) => {
        console.log(path);
        navigate(path)
    }

    const avatarMenu = (
        <Menu onClick={onAvatarMenuClick}>
            <Menu.Item key="1">1st menu item</Menu.Item>
            <Menu.Item key="2">2nd menu item</Menu.Item>
            <Menu.Item key="3">3rd menu item</Menu.Item>
        </Menu>
    )

    return (
        <Layout >
            {/* 头部区域 */}
            <Header className="header">
                <div className="logo" style={{ float: 'left' }}> {/* logo块左浮 让菜单上去 */}
                    <span style={{ color: 'white' }}>LOGO</span>
                </div>
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} className='headerMenu' >
                    <Menu.Item key="1">nav x</Menu.Item>
                    <Menu.Item key="2">nav 2</Menu.Item>
                    <Menu.Item key="3">nav 3</Menu.Item>
                </Menu>
                {/* 头像区域 */}
                <Dropdown overlay={avatarMenu} className='avatar'>
                    <div>
                        <Avatar>U</Avatar>
                        <span className='avatarName'>用户名</span>
                    </div>
                </Dropdown>

            </Header>

            <Layout style={{ height: '100%' }}>

                {/* 侧边栏区域 */}
                <Sider className="site-layout-background">
                    <Menu
                        mode="inline"
                        theme='dark'
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        style={{ height: '100%', borderRight: 0 }}
                    >
                        {
                            subMenu.filter(item => item.title !== 'NotFound').map(item => (
                                <Menu.Item key={item.path} onClick={() => onSubMenuClick(item.path)}>{item.title}</Menu.Item>
                            ))
                        }
                    </Menu>
                </Sider>

                {/* 内容块区域 */}
                <Layout style={{ padding: '0 24px 24px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item>
                    </Breadcrumb>

                    <Content
                        className="site-layout-background"
                        style={{
                            padding: 24,
                            margin: 0,
                            height: '80vh', // 改初始高度（vh视图高度）
                        }}
                    >
                        <Outlet />
                    </Content>
                </Layout>

            </Layout>

        </Layout>
    )
}