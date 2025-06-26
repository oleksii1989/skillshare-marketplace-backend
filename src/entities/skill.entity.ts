import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { User } from './user.entity';

@Entity()
export class Skill {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  category!: string;

  @Column()
  experience!: string;

  @Column()
  nature!: string; // 'onsite' or 'online'

  @Column()
  hourlyRate!: number;

  @ManyToOne(() => User, (user) => user.skills)
  provider!: User;
}
