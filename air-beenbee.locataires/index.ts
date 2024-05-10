import type { Request, Response } from "express";

const express = require('express');
const app = express();
const port = 3003;

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World! from air-beenbee.locataires')
  })
  
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })