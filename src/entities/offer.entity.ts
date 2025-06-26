import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Task } from './task.entity';
import { User } from './user.entity';

@Entity()
export class Offer {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Task)
  task: Task;

  @ManyToOne(() => User)
  provider: User;

  @Column()
  status: string; // 'pending', 'accepted', 'rejected'
}
