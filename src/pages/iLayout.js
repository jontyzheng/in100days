/*
 * @Author: jonty
 * @Date: 2022-02-15 20:17:55
 * @LastEditTime: 2022-02-15 21:23:20
 * @Description: 
 * @Reference: 
 * @FilePath: \in100days\src\pages\iLayout.js
 */
import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import './iLayout.css' // 引入一个css

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

export function ILayout() {
    return (
        <Layout >
            {/* 头部区域 */}
            <Header className="header">
                <div className="logo" style={{ float: 'left' }}> {/* logo块左浮 让菜单上去 */}
                    <span style={{ color: 'white' }}>LOGO</span>
                </div>
                <div>
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} className='headerMenu'>
                        <Menu.Item key="1">nav x</Menu.Item>
                        <Menu.Item key="2">nav 2</Menu.Item>
                        <Menu.Item key="3">nav 3</Menu.Item>
                    </Menu>
                </div>
            </Header>

            <Layout style={{ height: '100%' }}>

                {/* 侧边栏区域 */}
                <Sider className="site-layout-background">
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        style={{ height: '100%', borderRight: 0 }}
                    >
                        <SubMenu key="sub1" icon={<UserOutlined />} title="subnav 1">
                            <Menu.Item key="1">option1</Menu.Item>
                            <Menu.Item key="2">option2</Menu.Item>
                            <Menu.Item key="3">option3</Menu.Item>
                            <Menu.Item key="4">option4</Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub2" icon={<LaptopOutlined />} title="subnav 2">
                            <Menu.Item key="5">option5</Menu.Item>
                            <Menu.Item key="6">option6</Menu.Item>
                            <Menu.Item key="7">option7</Menu.Item>
                            <Menu.Item key="8">option8</Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub3" icon={<NotificationOutlined />} title="subnav 3">
                            <Menu.Item key="9">option9</Menu.Item>
                            <Menu.Item key="10">option10</Menu.Item>
                            <Menu.Item key="11">option11</Menu.Item>
                            <Menu.Item key="12">option12</Menu.Item>
                        </SubMenu>
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
                        Content
                    </Content>
                </Layout>

            </Layout>

        </Layout>
    )
}