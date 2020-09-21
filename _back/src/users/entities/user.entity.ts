import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import {UserRoles} from "../../auth/enums/roles.enum";
import {Statuses} from "../../auth/enums/user-statuses.enum";

@Entity()
export default class User {
    @PrimaryGeneratedColumn()
    public id?: number;

    @Column({ unique: true })
    public email: string;

    @Column()
    public password: string;

    @Column()
    public name: string;

    @Column()
    public role: UserRoles;

    @Column()
    public status: Statuses;
}
