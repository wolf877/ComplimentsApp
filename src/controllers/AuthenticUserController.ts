import {Request, Response} from "express"
import {AuthenticationService} from "../service/AuthenticUserService"

class AuthenticationUser {
     async handle(req: Request, res: Response){
     const {email, password} = req.body;

     const authenticationUser = new AuthenticationService();

     const token = await authenticationUser.execute(
         {
             email, password
         }
     )
     return res.json(token);
     }

}

export {AuthenticationUser}