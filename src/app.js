import express from 'express'
import employeeRoutes from './routes/employees.routes.js'
import welcome from './routes/index.routes.js'

const app = express()

app.use(express.json())

app.use('/', welcome)
app.use('/api', employeeRoutes)

app.use((req, res, next) =>{
    res.status(404).json({
        message: 'Not found',
        status: 404,
        goToHome: "http://localhost:3000/"
    })
})

export default app;