import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { User } from './user.entity';
import { Offer } from './offer.entity';
import { TaskProgress } from './task-progress.entity';

@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  category!: string;

  @Column()
  name!: string;

  @Column()
  description!: string;

  @Column()
  startDate!: Date;

  @Column()
  workingHours!: number;

  @Column()
  hourlyRate!: number;

  @Column()
  currency!: string;

  @ManyToOne(() => User, (user) => user.tasks)
  user!: User;

  @Column()
  status!: string; // 'open', 'in_progress', 'completed'

  @OneToMany(() => Offer, (offer) => offer.task)
  offers!: Offer[];

  @OneToMany(() => TaskProgress, (progress) => progress.task)
  progress!: TaskProgress[];
}
