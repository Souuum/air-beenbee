import type { Request, Response } from "express";

const express = require('express');
const app = express();
const port = 3002;

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World! from air-beenbee.proprietaires')
  })
  
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })