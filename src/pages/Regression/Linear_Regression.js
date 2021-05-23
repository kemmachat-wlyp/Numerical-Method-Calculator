import React, { Component } from 'react'
import {Card, Input, Button, Table} from 'antd';
import 'antd/dist/antd.css';
import {  sum,inv,multiply } from 'mathjs';
import axios from 'axios';
  
const InputColor = {
    background: "#ffffff",
    color: "black   ",
    fontWeight: "bold",
    fontSize: "24px"    
};

var table = [
    {
        title: "No.",
        dataIndex: "no",
        key: "no"
    },
    {
        title: "X",
        dataIndex: "x",
        key: "x"
    },
    {
        title: "Y",
        dataIndex: "y",
        key: "y"
    }
];
var schedule = []
var x, y, tableinput, answer

class LinearRegression extends Component {
    
    constructor() {
        super();
        x = []
        y = []

        tableinput = []
        this.state = {
            Points: 0,
            m: 0,
            showinput: false, //table
            showbutton: false, //sub2
            showAnswer: false,
            showgraph : false
        }
        this.handleChange = this.handleChange.bind(this);
      
    
    }  
    createTableInput(n) {
        for (var i=1 ; i<=n ; i++) {
            x.push(<Input style={{
                width: "18%",
                height: "50%",
                backgroundColor: "#",
                marginInlineEnd: "5%",
                marginBlockEnd: "5%",
                color: "black",
                fontSize: "18px",
                fontWeight: "bold"
            }}
            id={"x"+i} key={"x"+i} placeholder={"x"+i}/>);            
            y.push(<Input style={{
                width: "18%",
                height: "50%",
                backgroundColor: "#",
                marginInlineEnd: "5%",
                marginBlockEnd: "5%",
                color: "black",
                fontSize: "18px",
                fontWeight: "bold"
            }}
            id={"y"+i} key={"y"+i} placeholder={"y"+i}/>);

            tableinput.push({
                no: i,
                x: x[i-1],
                y: y[i-1]
            })

        }     
    
        this.setState({
            
            showinput: true,
            showbutton: true
        })
    }
    Valueinarray(n) {
        x = []
        y = []
        for (var i=1 ; i<=n ; i++) {
          x[i]= parseInt(document.getElementById("x"+i).value);    
  
        }  
        for (i=1 ; i<=n ; i++) {
            y[i] = parseFloat(document.getElementById("y"+i).value);
        }
    }

    LinearRegression(n) {
        var Xmatrix = [2], Ymatrix = [2]
        for (var i=0 ; i<2 ; i++) {
            Xmatrix[i] = []
            for (var j=0 ;  j<2 ; j++) {

                if (i===0 && j===0) {
                    Xmatrix[i][j] = n
                }
                else if (i===0 && j===1){
                    Xmatrix[i][j] = this.sumxpow(x, 1)
                }
                else if (i===1 && j===0){
                    Xmatrix[i][j] = this.sumxpow(x, 1)
                }
                else {
                    Xmatrix[i][j] = this.sumxpow(x, 2)
                }
            }
            
        }
        Ymatrix[0] = sum(y)
        Ymatrix[1] = this.sumXY(x, y)
        Xmatrix = inv(Xmatrix)
        answer = JSON.stringify(multiply(Xmatrix, Ymatrix)) //arr string
        console.log(answer)
       
        
        
        

        this.setState({
            showAnswer: true,
            showgraph : true
        })
         
    }
    sumxpow(A ,Powers) {
        var sum = 0
        for (var i=1 ; i<A.length ; i++) {
            sum = sum + Math.pow(A[i], Powers)
            
        }
        return sum       
    }
    sumXY(A, B) {
        var sum = 0
        for (var i=1 ; i<A.length ; i++) {
            sum = sum + A[i]*B[i]
            
        }
        return sum
    }
    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    render() {
        return(
            <body div style={{ background: "rgb(0, 12, 23)", padding: "30px" , width: '100%'}}>
                <h2 style={{color: "#FFFFFF", fontWeight: "bold",fontSize: "35px"}}>Linear Regression</h2>
                <div style={{textAlign:"left"}}>
                    <Card
                      bordered={true}
                      style={{ background: "rgb(0, 12, 23)", color: "#FFFFFFFF", width: '100%'}}
                        onChange={this.handleChange}
                      id="inputCard"
                    >
                        
                        <h2 style={{textAlign: "left"}}>Number of points(n)</h2><Input size="large" name="Points" style={InputColor}></Input><br/><br/>
                        <Button id="dimention_button" onClick= {
                                ()=> this.createTableInput(parseInt(this.state.Points))}
                                style={{ background: "#ffa31a", color: "black"  }}>
                                Submit<br></br>
                            </Button>
                                                
                        {this.state.showinput && 
                        
                        <div><br></br>
                            <Table columns={table} dataSource={tableinput} pagination={false} bordered={true} bodyStyle={{fontWeight: "bold", fontSize: "18px", color: "white"}}></Table>
                        </div>
                        }
                        <br></br>
                        
                        {this.state.showbutton && 
                            <Button 
                                id="matrix_button"  
                                style={{ background: "#ffa31a", color: "black"}}
                                onClick= {()=> {this.Valueinarray(parseInt(this.state.Points)); 
                                                this.LinearRegression(parseInt(this.state.Points))}}
                                >
                                Submit
                            </Button>
                        }
                        
                    </Card><br /><br />
                    {this.state.showAnswer &&
                        <Card
                        title={"Output"}
                        bordered={true}
                        style={{ background: "black", color: "#FFFFFFFF", textAlign: "left"}}
                        >
                            <p style={{fontSize: "24px", fontWeight: "bold", textAlign: "left"}}>x = {JSON.stringify(answer)}</p> 
                        </Card>                        
                    }
                    </div>               
            </body>
        );
    }
}
export default LinearRegression;