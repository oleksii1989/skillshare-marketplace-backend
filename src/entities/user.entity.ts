import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Task } from './task.entity';
import { Offer } from './offer.entity';
import { Skill } from './skill.entity';
import { TaskProgress } from './task-progress.entity';

@Entity()
export class User {
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

  @OneToMany(() => Task, (task) => task.user)
  tasks!: Task[];

  @OneToMany(() => Offer, (offer) => offer.provider)
  offers!: Offer[];

  @OneToMany(() => Skill, (skill) => skill.provider)
  skills!: Skill[];

  @OneToMany(() => TaskProgress, (progress) => progress.provider)
  taskProgress!: TaskProgress[];
}
