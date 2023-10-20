import { IsOptional, IsString, MinLength } from "class-validator";

export class CreateSeguimientoDto {

    @IsString()
    @MinLength(50)
    seguimiento_nombre: string;
    @IsString()
    @IsOptional()
    cita?: number;

}
