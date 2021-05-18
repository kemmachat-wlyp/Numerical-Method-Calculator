import React, { Component } from 'react';
import { Card, Input, Button } from 'antd';
import { Layout } from 'antd';
import 'antd/dist/antd.css';
import axios from 'axios';
import { compile, derivative } from 'mathjs';

class Forward_Divided_Differences extends Component {
    render() {
        return (
            <div >
                <h1 style={{ color: "black", fontWeight: "bold" }}>Forward_Divided_Differences</h1>
            </div>
        );
    }
}
export default Forward_Divided_Differences;

