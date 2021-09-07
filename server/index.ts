import dotenv from 'dotenv'
dotenv.config()

import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import morgan from 'morgan'
import routes from './routes/index'
import { createServer } from 'http'
import { Server, Socket } from 'socket.io'


// Middleware
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())
app.use(morgan('dev'))
app.use(cookieParser())

// Socket.io
const http = createServer(app)
export const io = new Server(http)
import { SocketServer } from './config/socket'


io.on("connection", (socket: Socket) => {
  SocketServer(socket)
})


// Routes
app.use('/api', routes.authRouter)
app.use('/api', routes.userRouter)
app.use('/api', routes.categoryRouter)
app.use('/api', routes.blogRouter)
app.use('/api', routes.commentRouter)


// Database
import './config/database'


// server listenning
const PORT = process.env.PORT || 5000
http.listen(PORT, () => {
  console.log('Server is running on port', PORT)
})