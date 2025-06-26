import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  CreateDateColumn,
} from 'typeorm';
import { Task } from './task.entity';
import { User } from './user.entity';

@Entity()
export class TaskProgress {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Task)
  task: Task;

  @ManyToOne(() => User)
  provider: User;

  @Column()
  description: string;

  @CreateDateColumn()
  timestamp: Date;
}
