import React,{ Component } from 'react';	
import PropTypes from 'prop-types';
import {Button} from 'antd';
import axios from 'axios';
import get from './axios/get';

var info;

class TestApp extends Component {
	constructor (props) {
		super(props);
		this.getData = this.getData.bind(this);
		this.state = {url : null}
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
				console.log("info : ",info);
			}
		);
		
		this.setState({url : info});
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
				<p>{this.state.url}</p>
				<Button onClick={this.getData}>click me</Button>
			</div>
		);
	}
}

//TestApp.defaultProps = {first : null};
//TestApp.propTypes = {first : PropTypes.json};

export default TestApp;