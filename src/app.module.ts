import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TratamientoModule } from './tratamiento/tratamiento.module';
import { SeguimientoModule } from './seguimiento/seguimiento.module';
import { CitaModule } from './cita/cita.module';
import { CitaController } from './cita/cita.controller';
import { TratamientoController } from './tratamiento/tratamiento.controller';
import { SeguimientoController } from './seguimiento/seguimiento.controller';
import { TratamientoService } from './tratamiento/tratamiento.service';
import { SeguimientoService } from './seguimiento/seguimiento.service';
import { CitaService } from './cita/cita.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({

  imports: [ 
    
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3307,
      username: 'Jean',
      password: 'root',
      database: 'db_odontologia',
      autoLoadEntities: true,
      synchronize: true,
    }),
    CitaModule, 
    SeguimientoModule, 
    TratamientoModule
  ],
  controllers: [AppController, CitaController, TratamientoController, SeguimientoController],
  providers: [AppService, TratamientoService, SeguimientoService, CitaService],
})
export class AppModule {}
