import dotenv from 'dotenv'
dotenv.config()

import express from 'express'
import cors from 'cors'
const app = express()
import path  from 'path'
const __dirname = path.resolve();
const PORT = process.env.PORT || 8000
import cb from './db/db.js'
import imageRoute from './routes/api.js'

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}));

app.use('/uploads', express.static('uploads'))
app.use('/files', express.static('./public/files'))
app.use('/api/v2', imageRoute)


app.use(express.static("./client/build"));
  
// app.get('*', (req, res) => {
//     res.sendFile("./client/build/index.html", { root: __dirname }),(err)=>{
//         res.status(500).send(err)
//     };
// });

app.get('*', function (req, res) {
    const index = path.join(__dirname, './client/build', 'index.html');
    res.sendFile(index);
  });

cb()

app.listen(PORT , ()=>{
    console.log(`Server started at port http://localhost:${PORT}`)
})
