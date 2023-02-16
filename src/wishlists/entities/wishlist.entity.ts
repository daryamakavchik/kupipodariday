import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from 'typeorm';
import { Length } from 'class-validator';
import { User } from 'src/users/entities/user.entity';
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

  @ManyToOne(() => User, (user) => user.wishlists)
  owner: User;

  @Column({ type: 'varchar' })
  @Length(1, 1500)
  description: string;

  @Column()
  image: string;

  @OneToMany(() => Wish, (wish) => wish.link)
  items: Wish[];
}
