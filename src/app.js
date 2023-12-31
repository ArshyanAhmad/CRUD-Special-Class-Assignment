import express from 'express'
import { config } from 'dotenv';
const app = express()
config()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

export default app;

