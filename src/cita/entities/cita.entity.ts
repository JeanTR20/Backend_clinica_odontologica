import { join } from "path";
import { Seguimiento } from "src/seguimiento/entities/seguimiento.entity";
import { Tratamiento } from "src/tratamiento/entities/tratamiento.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, JoinColumn } from 'typeorm';

@Entity()
export class Cita {
    @PrimaryGeneratedColumn()
    cita_id: number;
    @Column()
    paciente_id: number;
    @Column()
    estudiante_id: number;

    @ManyToOne(()=> Tratamiento, (tratamiento) => tratamiento.citas,{
        eager: true
    })
    @JoinColumn({name: 'tratamiento_id'})
    tratamiento: Tratamiento;

    @OneToMany(()=> Seguimiento, (seguimiento) => seguimiento.cita)
    seguimientos: Seguimiento[];
    
}
