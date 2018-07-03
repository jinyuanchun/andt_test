import React,{ Component } from 'react';	
import PropTypes from 'prop-types';

import axios from 'axios';
import get from './axios/get';

import {Button,Table} from 'antd';
import 'antd/dist/antd.css';

var info;
let self;

const columns = [{
	title:'子项目代码',
	dataIndex:'subproject_id',
	key:'subproject_id',
},{
	title:'子项目名称',
	dataIndex:'subproject_name',
	key:'subproject_name',
},{
	title:'合同代码',
	dataIndex:'project_id',
	key:'project_id',
},{
	title:'项目类型',
	dataIndex:'ais_type',
	key:'ais_type',
},{
	title:'分析类型',
	dataIndex:'ais_analysis',
	key:'ais_analysis',
},{
	title:'BMS状态',
	dataIndex:'source_status',
	key:'source_status',
},{
	title:'开始时间',
	dataIndex:'start_time',
	key:'start_time',
},{
	title:'结束时间',
	dataIndex:'end_time',
	key:'end_time',
}
]

class TestApp extends Component {
	constructor (props) {
		super(props);
		this.getData = this.getData.bind(this);
		this.state = {url : null}
		self=this;
	}
	getData () {
		//var info;
		/*
		function callback (argv) {
			console.log(argv.data);
		}
		*/

		//get('/php/mysql.php?usr=徐晓静',callback(res));
		
		get(
			'/php/mysql.php?usr=徐晓静',
			function(res){
				//console.log('res : ',res.data);
				info = res.data;
				if(info && info.length && info.length >0) {
					info.map(
						function(item,index){
							item.key = index
						}
					)
					self.setState({url:info});
				}
				
				console.log("info : ",info instanceof Array );
			}
		);
		
		/*
		info.foreach(function(item, index){
			return item.key = index;
		})
		*/
		console.log("info1 : ",info);
		//this.setState({url : info});
		//this.setState({url : data})
		//get('/php/mysql.php?usr=徐晓静',function(res){console.log(res.data)})
		/*
		axios.get('/php/mysql.php?usr=徐晓静').then(
			function (res,callback) {
				let json = res.data.data;
				this.setState({url : json});
				console.log("res:",res)
			}).catch(
			function (err) {
				console.error("err:",err);
			}
		);
		*/
		
	}
	render () {
		return (
			<div>
				
				<Button onClick={this.getData}>click me</Button>
				<Table dataSource={info} columns={columns} />
			</div>
		);
	}
}

//TestApp.defaultProps = {first : null};
//TestApp.propTypes = {first : PropTypes.json};

export default TestApp;
