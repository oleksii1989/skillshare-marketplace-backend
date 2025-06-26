import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Task } from './task.entity';
import { User } from './user.entity';

@Entity()
export class Offer {
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(() => Task, (task) => task.offers)
  task!: Task;

  @ManyToOne(() => User, (user) => user.offers)
  provider!: User;

  @Column()
  status!: string; // 'pending', 'accepted', 'rejected'
}
