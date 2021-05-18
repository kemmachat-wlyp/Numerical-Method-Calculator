import React, { Component } from 'react'
import { Card, Input, Button } from 'antd';
import { Layout } from 'antd';
import 'antd/dist/antd.css';
import { compile ,derivative} from 'mathjs';
import axios from 'axios';
const { Content } = Layout;

class Backward_Divided_Differences extends Component {
    render() {
        return (
            <div >
                <h1 style={{ color: "black", fontWeight: "bold" }}>Backward_Divided_Differences</h1>
            </div>
        );
    }
}
export default Backward_Divided_Differences;

