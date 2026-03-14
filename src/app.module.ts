import { Module } from '@nestjs/common';
import { MaterialModule } from './materials/materials.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot(), MaterialModule],
})
export class AppModule { }
