/*En typescrip tenemos dos formas de usar las interfacez, la primera es para tipar objetos, y la segunda cuando queramos especificar un contrato
detallado de que es lo que tiene la implementar cada clase que haga uso de ella*/ 

export interface Driver {
    database: string;
    password: string;
    port: number;

    connect(): void;
    disconnect(): void;
    isConnected(name: string): boolean;
}


class PostgresDriver implements Driver {

    constructor(
        public database: string,
        public password: string,
        public port: number) {
    }
   
    connect(): void {
        throw new Error("Method not implemented.");
    }
    disconnect(): void {
        throw new Error("Method not implemented.");
    }
    isConnected(name: string): boolean {
        throw new Error("Method not implemented.");
    }

}

class SqlServerDriver implements Driver {
    
    constructor(
        public database: string,
        public password: string,
        public port: number) {
        
    }
    
    connect(): void {
        throw new Error("Method not implemented.");
    }
    disconnect(): void {
        throw new Error("Method not implemented.");
    }
    isConnected(name: string): boolean {
        throw new Error("Method not implemented.");
    }
    isMemomryVersion(): boolean{
        throw new Error("Method not implemented.")
    }
}