import express, { Router } from "express";


interface Options{
    port? : number;
    routes : Router;
}

export class Server {


    public readonly app = express();
    private readonly port: number;
    private readonly routes: Router;
    
    
    constructor(options : Options) {
        
        const {port = 3100, routes} = options;
        this.port = port;
        this.routes = routes;
    }

    async start() {
        
        
        //Usar las rutas definidas
        this.app.use(this.routes);
    
    
        // Escuchar en el puerto
        this.app.listen(this.port, () => {
            console.log(`Server is running on port ${this.port}`);
        });
    }
}
