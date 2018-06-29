import React,{ Component } from 'react';
//import ReactDOM from 'react-dom';

import './AIS.css';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
//import { Layout, Menu, Breadcrumb } from 'antd';
//import { Table, Divider } from 'antd';
//import { Table } from 'antd';
import 'antd/dist/antd.css';

import MainProjectTable from './js/MainProjectTable';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

// 整体布局
class AIS extends Component {
	render () {
		return (
	<Layout>
		<Header className="header">
				<div className="logo" />
				<Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} style={{ lineHeight:'64px' }} >
					<Menu.Item key="1">nav 1</Menu.Item>
					<Menu.Item key="2">nav 2</Menu.Item>
					<Menu.Item key="3">nav 3</Menu.Item>
				</Menu>
		</Header>
		<Layout>
			<Sider width={200} style={{ background: '#fff' }}>
				<Menu mode="inline" defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']} style={{ height: '100%', borderRight: 0 }} >
					<Menu.Item key="ProjectList"><Icon type="bars"/>项目列表</Menu.Item>
					<SubMenu key="ProjectStat" title={<span><Icon type="area-chart" />项目统计</span>}>
						<Menu.Item key="5">QCD统计</Menu.Item>
						<Menu.Item key="6">基本统计</Menu.Item>
						<Menu.Item key="7">部门统计</Menu.Item>
					</SubMenu>
					<SubMenu key="ProjectAction" title={<span><Icon type="notification" />项目操作</span>}>
						<Menu.Item key="9">质控</Menu.Item>
						<Menu.Item key="10">结题</Menu.Item>
						<Menu.Item key="11">备份</Menu.Item>
						<Menu.Item key="12">删除</Menu.Item>
					</SubMenu>
					</Menu>
			</Sider>
			
			<Layout style={{ padding: '0 24px 24px' }}>
				<Breadcrumb style={{ margin: '16px 0' }}>
					<Breadcrumb.Item>Home</Breadcrumb.Item>
					<Breadcrumb.Item>List</Breadcrumb.Item>
					<Breadcrumb.Item>App</Breadcrumb.Item>
				</Breadcrumb>
				<Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
					<MainProjectTable />
				</Content>
			</Layout>
			
		</Layout>
	</Layout>
		);
	}
}

export default AIS;
