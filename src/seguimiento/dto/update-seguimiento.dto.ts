import { PartialType } from '@nestjs/mapped-types';
import { CreateSeguimientoDto } from './create-seguimiento.dto';
import { Seguimiento } from '../entities/seguimiento.entity';
import { IsOptional, IsString, MinLength } from 'class-validator';

//export class UpdateSeguimientoDto extends PartialType(CreateSeguimientoDto) {}

export class UpdateSeguimientoDto{

    @IsString()
    @MinLength(50)
    @IsOptional()
    seguimiento_nombre?: string;
}
