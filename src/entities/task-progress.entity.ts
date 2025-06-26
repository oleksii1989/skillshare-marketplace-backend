import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Task } from './task.entity';
import { User } from './user.entity';

@Entity()
export class TaskProgress {
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(() => Task, (task) => task.progress)
  task!: Task;

  @ManyToOne(() => User, (user) => user.taskProgress)
  provider!: User;

  @Column()
  description!: string;

  @Column()
  timestamp!: Date;
}
