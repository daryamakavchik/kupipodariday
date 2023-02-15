import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from '../../users/entities/user.entity';

@Entity()
export class Offer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  createdAt: Date;

  @Column()
  updatedAt: Date;

  @ManyToOne(() => User, (user) => user.id)
  user: number;

  @Column()
  item: string;

  @Column('numeric', { scale: 2 })
  amount: number;

  @Column({ default: false })
  hidden: boolean;
}
