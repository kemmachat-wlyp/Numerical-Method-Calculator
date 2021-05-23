import React, { Component } from 'react'
import 'antd/dist/antd.css';
import { Layout, Menu, Icon, Input, Button, Card, Row, Table, Col } from 'antd';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import { compile } from 'mathjs';
import axios from 'axios';
const { Content } = Layout;

const InputStyle = {
    background: "#ffffff",
    color: "black   ",
    fontWeight: "bold",
    fontSize: "24px"
};

var dataInTable = []
const columns = [
    {
        title: "Iteration",
        dataIndex: "iteration",
        key: "iteration"
    },
    {
        title: "XL",
        dataIndex: "xl",
        key: "xl"
    },
    {
        title: "XR",
        dataIndex: "xr",
        key: "xr"
    },
    {
        title: "X",
        dataIndex: "x",
        key: "x"
    },
    {
        title: "Error",
        key: "error",
        dataIndex: "error"
    }
];
var fx = " ";
class False_position extends Component {

    constructor() {
        super();
        this.state = {
            fx: "",
            xl: 0,
            xr: 0,
            showOutputCard: false,
            showGraph: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.false_position = this.false_position.bind(this);
    }
    API = async () => {
        var response = await axios.get('http://localhost:3001/False_position').then(res => { return res.data })
        this.setState({
            fx: response['False_position']['fx'],
            xl: response['False_position']['xl'],
            xr: response['False_position']['xr'],

        });
        alert(
            "Fx : "+ this.state.fx+"    "+
            "XL : "+ this.state.xl+"    "+
            "XR : "+ this.state.xr
        );
        this.false_position(this.state.xl, this.state.xr)
    }
    false_position(xl, xr) {
        fx = this.state.fx;
        var increaseFunction = false;
        var xi = 0;
        var epsilon = parseFloat(0.000000);
        var n = 0;
        var data = []
        data['xl'] = []
        data['xr'] = []
        data['x'] = []
        data['error'] = []
        if (this.func(xl) < this.func(xr)) {
            increaseFunction = true;
        }
        do {
            xi = (xl * this.func(xr) - xr * this.func(xl)) / (this.func(xr) - this.func(xl));
            if (this.func(xi) * this.func(xr) < 0) {
                epsilon = this.error(xi, xr);
                if (increaseFunction) {
                    xl = xi;
                }
                else {
                    xr = xi;
                }

            }
            else {
                epsilon = this.error(xi, xl);
                if (increaseFunction) {
                    xr = xi;
                }
                else {
                    xl = xi;
                }

            }
            data['xl'][n] = xl;
            data['xr'][n] = xr;
            data['x'][n] = xi.toFixed(8);
            data['error'][n] = Math.abs(epsilon).toFixed(8);
            n++;

        } while (Math.abs(epsilon) > 0.000001);

        this.createTable(data['xl'], data['xr'], data['x'], data['error']);
        this.setState({
            showOutputCard: true,
            showGraph: true
        })
    }
    func(X) {
        var expr = compile(this.state.fx);
        let scope = { x: parseFloat(X) };
        return expr.eval(scope);
    }
    error(xnew, xold) {
        return Math.abs((xnew - xold) / xnew);
    }
    createTable(xl, xr, x, error) {
        dataInTable = []
        for (var i = 0; i < xl.length; i++) {
            dataInTable.push({
                iteration: i + 1,
                xl: xl[i],
                xr: xr[i],
                x: x[i],
                error: error[i]
            });
        }

    }
    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    render() {
        return (
            <div >

<div
                    onChange={this.handleChange}
                    style={{
                        padding: '50px',
                        background: "#",
                        width: '100%',
                    }}
                >
                    <div
                        style={{
                            color: "#ffffff",
                            background: "#",
                        }}
                    >
                        <h2>f(x)</h2><Input size="large" name="fx" style={InputStyle} value={this.state.fx}></Input>
                        <h2>X<sub>L</sub></h2><Input size="large" name="xl" style={InputStyle} value={this.state.xl}></Input>
                        <h2>X<sub>R</sub></h2><Input size="large" name="xr" style={InputStyle} value={this.state.xr}></Input><br /><br />
                        <Button id="submit_button" onClick={
                            () => this.false_position(parseFloat(this.state.xl), parseFloat(this.state.xr))
                        }
                            style={{ background: "#ffa31a", color: "black", fontSize: "20px"}}>Submit <br></br></Button>
                        <br /><br />
                        <Button id="API" onClick={
                            () => this.API()
                        }
                            style={{ background: "#ffa31a", color: "black", fontSize: "20px"}}>API <br></br></Button>
                    </div>

                    <br /><br />
                    {this.state.showGraph &&
                        <Card
                            style={{ borderRadius: "20px" }}
                        >
                            <LineChart width={730} height={250} data={dataInTable}
                                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                                <XAxis dataKey="error" />
                                <YAxis />
                                <CartesianGrid strokeDasharray="3 3" />
                                <Tooltip />
                                <Legend verticalAlign="top" height={36} />
                                <Line name="error" type="monotone" dataKey="error" stroke="#8884d8" />
                            </LineChart>
                        </Card>
                    }
                    <br /><br />

                    {this.state.showOutputCard &&
                        <Card
                            bordered={true}
                            style={{ borderRadius: "10px" }}
                        >
                            <Table columns={columns} bordered={true} dataSource={dataInTable} bodyStyle={{ fontWeight: "bold", fontSize: "18px", color: "black" }}
                            ></Table>
                        </Card>
                    }
                    <br /><br />
                    </div>
            </div>
        );
    }
}
export default False_position;

