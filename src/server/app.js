import express from 'express'
import employeeRoutes from './routes/employees.routes.js'

const app = express()

app.use(express.json())

app.use('/api', employeeRoutes)

app.use((req, res, next) =>{
    res.status(404).json({
        message: 'Not found',
        status: 404,
        goToHome: "http://localhost:5000/api/welcome"
    })
})

export default app;