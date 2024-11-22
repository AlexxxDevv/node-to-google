import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export default class Customer {
  @Column()
  @PrimaryGeneratedColumn()
    pgid!: number;

  @Column()
    id!: number;

  @Column()
    firstName!: number;

  @Column()
    lastName!: string;

  @Column()
    gender!: number;

  @Column()
    address!: string;

  @Column()
    city!: number;

  @Column()
    phone!: string;

  @Column()
    email!: string;
}
