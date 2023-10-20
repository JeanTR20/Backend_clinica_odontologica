import { IsString, MinLength } from "class-validator";


export class CreateTratamientoDto {
    @IsString()
    @MinLength(50)
    tratamiento_nombre: string;
}
