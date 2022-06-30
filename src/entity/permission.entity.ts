import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Role } from './role.entity';

@Entity()
export class Permission {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    action: string;

    @Column()
    subject: string;

    @Column({
        nullable: true,
    })
    conditions: string;

    @ManyToOne(() => Role, (role) => role.permissions)
    role: Role;
}
