import app from './app.js'
import {connectDB} from './config/database.js'

app.get('/', (req,res,next)=>{
    res.send("<h1>Working</h1>")
})
connectDB()

app.listen(process.env.PORT,()=>{
    console.log(`Server listening on PORT: ${process.env.PORT}`)
})