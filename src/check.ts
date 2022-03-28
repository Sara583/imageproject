import fs from "fs";
import { Request, Response, NextFunction } from "express";
import path from "path";
import fsextra from "fs-extra"

import processImg from "./";
import { query } from "express-validator";

const editedImg = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
    const width=req.query.width as string;
    const height=req.query.height as string;
    const file=req.query.filename as string;
    const parsedWidth=parseInt(width);
    const parsedHeight=parseInt(height);
    query('width','height')
    .exists()
    .withMessage('Width And Height Are Mandatory')
 
    const imagePath = `${file}${parsedWidth}x${parsedHeight}.jpg`;
    const img=path.resolve("./"+`build/assests/images ${file} .jpg`)
    const existingPath = await (path.join("public", imagePath));

    if (existingPath) {
      res.sendFile(`/${imagePath}`, { root: path.join("./public") });
    } else {
      res.send("cann't find image")
      };
    
    }


export default editedImg;