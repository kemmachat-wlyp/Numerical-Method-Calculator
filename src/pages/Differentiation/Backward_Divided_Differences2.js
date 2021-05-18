import React, { Component } from 'react';
import { Card, Input, Button } from 'antd';
import { Layout } from 'antd';
import 'antd/dist/antd.css';
import axios from 'axios';
import { compile, derivative } from 'mathjs';

const { Content } = Layout;

class Backward_Divided_Differences2 extends Component {
    render() {
        return (
            <div >
                <h1 style={{ color: "black", fontWeight: "bold" }}>Backward_Divided_Differences2</h1>
            </div>
        );
    }
}
export default Backward_Divided_Differences2;

