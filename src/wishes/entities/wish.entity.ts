import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Length } from 'class-validator';
import { User } from '../../users/entities/user.entity';
import { Offer } from '../../offers/entities/offer.entity';

@Entity()
export class Wish {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  createdAt: Date;

  @Column()
  updatedAt: Date;

  @Column()
  @Length(1, 250)
  name: string;

  @Column()
  link: string;

  @Column() //validate URL
  image: string;

  @Column('numeric', { scale: 2 })
  price: number;

  @Column('numeric', { scale: 2 })
  raised: number;

  @ManyToOne(() => User, (user) => user.username)
  owner: string;

  @Column({ type: 'varchar' })
  @Length(1, 1024)
  description: number;

  @OneToMany(() => Offer, (offer) => offer.item)
  offers: Offer[];

  @Column()
  copied: number;
}
