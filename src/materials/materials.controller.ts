import { Controller, Get } from "@nestjs/common";
import { MaterialsService } from "./materials.service";

@Controller({})
export class MaterialController{
    materialsServices: MaterialsService

    constructor(materialsServices: MaterialsService){
        this.materialsServices = materialsServices
    }
    @Get('/materials')
    getAllMaterials(){
       return this.materialsServices.getMaterials()
    }
}