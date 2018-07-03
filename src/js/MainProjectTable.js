import React,{ Component } from 'react';
import ReactDom from 'react-dom';

//import { Table, Icon, Divider } from 'antd';
import { Table } from 'antd';

import get from '../axios/get';

let info;
let self;

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

class MainProjectTable extends Component {
	constructor (props) {
		super(props);
		this.state = {
			dataMainProject : null
		};
		self=this;
	}
	componentDidMount () {
		//alert(111);
		get(
			'/php/mysql.php?usr=徐晓静',
			function(res){
				console.log('res : ',res.data);
				info = res.data;
				if(info && info.length && info.length >0) {
					info.map(
						function(item,index){
							item.key = index
						}
					)
					self.setState({dataMainProject : info});
				}
				
				
			}
		);
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
