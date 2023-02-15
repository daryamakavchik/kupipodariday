import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Length } from 'class-validator';
import { Wish } from '../../wishes/entities/wish.entity';

@Entity()
export class Wishlist {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  createdAt: Date;

  @Column()
  updatedAt: Date;

  @Column({ type: 'varchar' })
  @Length(1, 250)
  name: string;

  @Column({ type: 'varchar' })
  @Length(1, 1500)
  description: string;

  @Column()
  image: string;

  @OneToMany(() => Wish, (wish) => wish.link)
  items: Wish[];
}
