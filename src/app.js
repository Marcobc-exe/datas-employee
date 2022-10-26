import express from 'express'
import employeeRoutes from './routes/employees.routes.js'

const app = express()

app.use(express.json())

app.use('/api', employeeRoutes)

app.use((req, res, next) =>{
    res.status(404).json({
        message: 'Endpoint not found',
        status: 404
    })
})

export default app;