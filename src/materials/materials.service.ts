import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class MaterialsService {
    constructor(private prisma: PrismaService){}

getMaterials() {
    return this.prisma.materials.findMany()
}}
