import React,{ Component } from 'react';
import ReactDom from 'react-dom';

//import { Table, Icon, Divider } from 'antd';
import { Table } from 'antd';

//import ajax_MainProject from '../ajax/ajax.js';
import $ from 'jquery';

// step 1 通过后台调取数据
//var ajax_data = 'usr=徐晓静';
//var ajax_url = 'http://localhost:8080/antd_test/src/php/mysql.php';
//var projectData = ajax_MainProject(ajax_data,ajax_url);
//console.log("hello"+projectData);

function ajax_MainProject (dat,adrB) {
	//console.log(dat);
	//var dat = {usr:"徐晓静"};
 $.ajax(
			{
					url:adrB,
					//data:JSON.stringify(dat),
					data:dat,
					type:"get",
					dataType:"jsonp",
					jsonpCallback:'new_callback',
					async:true,
					//scriptCharset:'utf-8',
					//context:'text/json',
					
					success:function (res){
							return res;
					},
					error:function(){
							alert('failed');
					}
					
			}
	)
}

// 表展示
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

// 定义表
/*
const dataSource = [{
  key: '1',
  name: '胡彦斌',
  age: 32,
  address: '西湖区湖底公园1号'
}, {
  key: '2',
  name: '胡彦祖',
  age: 42,
  address: '西湖区湖底公园1号'
}];
*/

/*
const columns = [{
  title: '姓名',
  dataIndex: 'name',
  key: 'name',
}, {
  title: '年龄',
  dataIndex: 'age',
  key: 'age',
}, {
  title: '住址',
  dataIndex: 'address',
  key: 'address',
}];
*/

class MainProjectTable extends Component {
	constructor (props) {
		super(props);
		this.state = {
			dataMainProject : null
		}
	}
	
	componentDidMount () {
		var ajax_data = 'usr=徐晓静';
		var ajax_url = 'http://localhost:8080/antd_test/src/php/mysql.php';
		this.setState({dataMainProject : ajax_MainProject(ajax_data,ajax_url)});
	}

	render () {
		return (
		<div>
			<Table dataSource={ this.state.dataMainProject } columns={columns}/>
		</div>
		);
	}
}

export default MainProjectTable;
