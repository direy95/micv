export class Estudios{
    id?: number;
    nombre: string;
    descEst: string;
    anoI: number;
    anoF: number;
    imgEdu: string;

    constructor(nombre: string, descEst: string, anoI: number, anoF: number, imgEdu: string){
        this.nombre=nombre;
        this.descEst=descEst;
        this.anoI=anoI;
        this.anoF=anoF;
        this.imgEdu=imgEdu;
    }

}