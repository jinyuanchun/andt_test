import React,{ Component } from 'react';
import ReactDom from 'react-dom';
import {Button} from 'antd';
import 'antd/dist/antd.css';

function change (nid) {
    alert('确认改变');
    ReactDom.render(
        <p>你不好</p>,
        nid
    );
}

class Tt extends Component {
    render () {
        return (
            <div>
                <p key="x1">你好</p>
                <Button key="x2" onClick="change('x1')">点击改变</Button>
            </div>
        );
    }
}

export default Tt;