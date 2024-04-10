import { Request, Response } from "express";


export class AuthController {

    //DI
    constructor() {}
    
    registerUser = async(req : Request, res : Response) => {
        res.json("Register User Controller");
    }
    
    loginUser = async(req : Request, res: Response) => {
        res.json("Login User Controller");
    }

    
    
    
}