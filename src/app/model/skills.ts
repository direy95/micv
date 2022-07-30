export class Skills{
    id?: number;
    skill: string;
    porcentaje: number;
    img_skill:string;

    constructor(skill:string, porcentaje:number, img_skill:string){
        this.skill=skill;
        this.porcentaje=porcentaje;
        this.img_skill=img_skill;
    }
}