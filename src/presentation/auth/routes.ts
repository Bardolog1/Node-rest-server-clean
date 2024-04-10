import { Router } from "express";



export class AuthRoutes {
    
    static get routes(): Router{
    
        const router = Router();

          //def all Auth routes
        
          router.post('/login', (req, res) => {
            res.json("Login");
        });
        
        router.post('/register', (req, res) => {
            res.json("Register");
        });
        
        return router;
        
        
       
        
    }

}