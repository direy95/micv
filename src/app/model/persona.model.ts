export class persona{
    //con ? indicamos que el dato no es necesario
    id?: number;
    nombre: string;
    apellido: string;
    img: string;
    acerca: string;

    constructor(nombre: string, apellido: string, img: string, acerca: string){
        this.nombre=nombre;
        this.apellido=apellido;
        this.img=img;
    }
}