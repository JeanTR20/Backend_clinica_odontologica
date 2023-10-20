import { Module } from '@nestjs/common';
import { SeguimientoService } from './seguimiento.service';
import { SeguimientoController } from './seguimiento.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Seguimiento } from './entities/seguimiento.entity';
import { CitaModule } from 'src/cita/cita.module';
import { CitaService } from 'src/cita/cita.service';
import { Cita } from 'src/cita/entities/cita.entity';
import { TratamientoModule } from 'src/tratamiento/tratamiento.module';
import { TratamientoService } from 'src/tratamiento/tratamiento.service';
import { Tratamiento } from 'src/tratamiento/entities/tratamiento.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Seguimiento, Cita, Tratamiento]), CitaModule, TratamientoModule],
  controllers: [SeguimientoController],
  providers: [SeguimientoService, CitaService, TratamientoService],
})
export class SeguimientoModule {}
