import { Express, Request, Response, NextFunction } from 'express';
 const err =(err:Error,req:Request,res:Response,next:NextFunction)=>{
    
    const status=500;
    const errMsg="sorry something wrong happened"; 
    console.log(status+""+errMsg)
    next();
    
  }

export default err;
////////////////test////////////////////////////
//function logger (req:Request,res:Response,next: NextFunction){
//    console.log("logged")
//  }
//  export default logger;