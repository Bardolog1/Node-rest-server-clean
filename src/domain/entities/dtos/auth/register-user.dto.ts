import { Validators } from "../../../../config";



export class RegisterUserDto {

// establezco los atributos que se van a recibir en el body
    private constructor(
        public name: string,
        public email: string,
        public password: string,

    ) {}
    
    
    // metodo para crear una instancia de la clase RegisterUserDto y validar los datos 
    static create(object: {[key: string]: any}): [string?, RegisterUserDto?] {
    
        const {name, email, password} = object;
        
        if(!name) return ["Name is required", undefined];
        if(!email) return ["Email is required", undefined];
        if(!Validators.email.test(email)) return ["Email is invalid", undefined];
        if(!password) return ["Password is required", undefined];
        if(password.length < 6) return ["Password must be at least 6 characters", undefined];
    
    
        return [undefined, new RegisterUserDto(name, email.toLowerCase(), password)];
    }
}