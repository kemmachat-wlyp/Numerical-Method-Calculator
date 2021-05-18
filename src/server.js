const express = require('express');
const app = express()
const API = {
  Bisection: {
    fx: 'x^2+4',
    xl: '50',
    xr: '20'
  },
  False_position:{
    fx: '43x-1',
    xl: '0.02',
    xr: '0.03'
  },
  Newton_raphson:{
    fx: 'x^3-7x^2+8x-3',
    x0: '5'
  },
  Onepoint:{
    fx: 'x^5-3x^3+1',
    x0: '0'
  },
  Secant:{
    fx: 'e^(-2x)+sin(3x)',
    x0: '1',
    x1: '3'
  }
}


app.get('/Bisection', (req, res) => {
  // const { params } = req
  res.setHeader('Access-Control-Allow-Origin', '*');
      res.json({ Bisection: API.Bisection })
})

app.get('/False_position', (req, res) => {
  // const { params } = req
  res.setHeader('Access-Control-Allow-Origin', '*');
      res.json({ False_position: API.False_position })
})

app.get('/Newton_raphson', (req, res) => {
  // const { params } = req
  res.setHeader('Access-Control-Allow-Origin', '*');
      res.json({ Newton_raphson: API.Newton_raphson })
})

app.get('/Onepoint', (req, res) => {
  // const { params } = req
  res.setHeader('Access-Control-Allow-Origin', '*');
      res.json({ Onepoint: API.Onepoint })
})

app.get('/Secant', (req, res) => {
  // const { params } = req
  res.setHeader('Access-Control-Allow-Origin', '*');
      res.json({ Secant: API.Secant })
})


app.listen(3001, () => {
  console.log('Application is running on port 3001')
})