const express = require('express')
const jwt = require('jsonwebtoken')
const bodypaeser = require('body-parser')

const app = express();
app.use(bodypaeser({ extended: true }))

app.get("/", ,(req, res) => {
    res.sendFile(__dirname + "/Index.html")
})


app.post('/', (req, res) => {
    // console.log(req.body.num)
    const num = Number(req.body.num)
    let n1 = 0;
    let n2 = 1;
    let nextTerm;
    const arr = [0, 1]

    if (num > 100) res.send("<p style='color:red;'>Not a valid number : Enter number between 0 to 100</p>")
    if(num===0) res.send(`Invalid number`)
    if (num > 2) {
        for (i = 0; i < num - 2; i++) {
            nextTerm = n1 + n2;
            arr.push(nextTerm)
            n1 = n2;
            n2 = nextTerm;
        }
    }

    if (num === 2 || num === 1) {
        num === 2 ? res.send(`Fibonacci series is : ${arr}`) : res.send(`Fibonacci series is : ${n1}`)
    }
    else {
        res.send(`<p style=' color:gray'>Fibonacci series of ${num} number : ${arr}</p>`)
    }
})

// const createToken = async() =>{
//     const token = await jwt.sign({token:"Fibonacciapi"},"FaisalAzhar");
//     console.log(token)
// }

// createToken()


app.listen(3000, () => {
    console.log("Server started")
})