import React, { Component } from 'react'
import { Layout, Input, Button, Card, Table } from 'antd';
import 'antd/dist/antd.css';
import { compile } from 'mathjs';
import axios from 'axios';
var Algebrite = require('algebrite')

class Simpson extends Component {
    render() {
        return (
            <div >
                <h1 style={{ color: "black", fontWeight: "bold" }}>Simpson</h1>
            </div>
        );
    }
}
export default Simpson;




