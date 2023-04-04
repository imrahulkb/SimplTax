import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import data from './database.js';
const app = express();

app.use(cors());
app.use(bodyParser.json());


app.get('/api',(req,res)=>{
    res.json({"blogData" : data});
})

app.listen(5000,()=>{ 
console.log("server started on port 5000");
})

app.post('/api/sum', (req, res) => {
    const { num1, num2 } = req.body;
    const sum = num1 + num2;
    res.send({ sum });
});
  
