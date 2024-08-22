import express, { Request, Response } from 'express';
import "dotenv/config";
import cors from 'cors';

const app = express();

app.use(express.json())
app.use(cors())

app.get("/test", async(req: Request , res:Response)=>{
    res.json({ message:"Hello!"});
});

app.listen(7000,()=>{
 console.log("Server Started On LH:7000");
})