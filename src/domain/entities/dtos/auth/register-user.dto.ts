


export class RegisterUserDto {

// establezco los atributos que se van a recibir en el body
    private constructor(
        public name: string,
        public email: string,
        public password: string,

    ) {}
    
    static create(object: {[key: string]: any}): [string?, RegisterUserDto?] {
    
        
    
    
        return [];
    }
}