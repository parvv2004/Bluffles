import express from 'express';
import Connection from './Database/db.js';

const  app= express();
const PORT=8000;
Connection();
app.listen(PORT,()=> console.log(`server is running succesfully on PORT ${PORT}`))