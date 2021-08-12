import {Request, Response, NextFunction} from "express"
import { verify } from "jsonwebtoken";

interface IPaload{
  sub: string;
}
export function ensureAuthenticated(
    req: Request, 
    res: Response, 
    next: NextFunction
    ){
      const AuthToken = req.headers.authorization;

      

      if (!AuthToken){
        return res.status(401).end();
      }
      
      

      const [, token] = AuthToken.split(" ")
      
 
      
      try{
        const { sub } = verify(token, "a2e63ee01401aaeca78be023dfbb8c59") as IPaload;
        req.user =  sub

      }catch(err){
        return res.status(401).end();
      }
      


      
      return next();
}