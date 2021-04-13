const express = require('express')
const productRoute = require('./routes/product.route')
const customerRoute = require('./routes/customer.route')
const salesRoute = require('./routes/sales.route')

const app = express()

app.get('/', (req, res)=> {
    res.send('Hello world')
})

app.use(express.json())
app.use('/products', productRoute)
app.use('/customer', customerRoute)
app.use('/sales', salesRoute)

app.listen(8080, ()=> {
    console.log("Server started on port 8080")
})