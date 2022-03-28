import express, { Application, Request, Response } from 'express'
import morgan from 'morgan'
import * as dotenv from 'dotenv'
//import logger from './middleware/middleware'
import err from './middleware/middleware'
import router from './routes/index'
dotenv.config()

const PORT = process.env.PORT || 3000
// create an instance server
const app: Application = express()
// HTTP request logger middleware
app.use(morgan('short'))

// add routing for / path

app.use('/api',router)
app.get('/',(req: Request, res: Response, next:express.NextFunction) => {
  res.send('hey there')
  next()
})

app.use(err);

// start express server
app.listen(PORT, () => {
  console.log(`Server is starting at port:${PORT}`)
})

export default app