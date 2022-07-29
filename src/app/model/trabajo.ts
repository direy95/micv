export class Trabajo {
    id?: number;
    nombreT: string;
    descTrabajo: string;

    constructor(nombreT:string, descTrabajo:string){
        this.nombreT=nombreT;
        this.descTrabajo=descTrabajo;
    }
}
