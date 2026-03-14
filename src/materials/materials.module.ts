import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { MaterialController } from './materials.controller';
import { MaterialsService } from './materials.service';

@Module({
    controllers:[MaterialController],
    providers: [MaterialsService, PrismaService]
})
export class MaterialModule{}