export class Experiencias{
    id?: number;
    nombre: string;
    descExp: string;
    anoI: number;
    anoF: number;
    expImg: string;

    constructor(nombre:string, descExp:string, anoI:number, anoF:number, expImg:string){
        this.nombre=nombre;
        this.descExp=descExp;
        this.anoI=anoI;
        this.anoF=anoF;
        this.expImg=expImg;
    }
}