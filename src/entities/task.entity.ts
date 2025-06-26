import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { User } from './user.entity';

@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  category: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  startDate: Date;

  @Column()
  workingHours: number;

  @Column()
  hourlyRate: number;

  @Column()
  currency: string;

  @ManyToOne(() => User)
  user: User;

  @Column({ default: 'open' })
  status: string; // 'open', 'in_progress', 'completed'
}
