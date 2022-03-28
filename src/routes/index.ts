import {query} from 'express-validator'
import express from 'express'
import path from 'path'
import sharp from 'sharp'
import { Express, Request, Response, NextFunction } from 'express';
import fs from 'fs-extra';

import processImg from '../processing';
import editedImg from '../check';
const router: express.Router = express.Router();
router.use(express.static("build"))
//router.get('/',(req,res)=>{
//    res.send('hello from routes')
//  
//})

router.get('/api/edited'
,  
   
    editedImg
)

export default router;