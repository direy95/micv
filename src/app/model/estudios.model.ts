export class estudios{
    idEdu?: number;
    titulo: String;
    descripcion: String;
    anoI: number;
    anoF: number;
    imgEdu: String;

    constructor(titulo: String, descripcion: String, anoI: number, anoF: number, imgEdu: String){
        this.titulo=titulo;
        this.descripcion=descripcion;
        this.anoI=anoI;
        this.anoF=anoF;
        this.imgEdu=imgEdu;
    }

}