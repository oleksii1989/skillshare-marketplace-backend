import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Provider {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  type!: string; // 'individual' or 'company'

  @Column({ nullable: true })
  fullName?: string;

  @Column({ nullable: true })
  companyName?: string;

  @Column({ nullable: true })
  email?: string;

  @Column({ nullable: true })
  mobileNumber?: string;

  @Column({ nullable: true })
  phoneNumber?: string;

  @Column({ nullable: true })
  businessTaxNumber?: string;

  @Column({ nullable: true })
  address?: string;

  @Column()
  password!: string; // Hashed
}
