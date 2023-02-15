import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Length } from 'class-validator';
import { Wish } from '../../wishes/entities/wish.entity';
import { Wishlist } from '../../wishlists/entities/wishlist.entity';
import { Offer } from '../../offers/entities/offer.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  createdAt: Date;

  @Column()
  updatedAt: Date;

  @Column({
    type: 'varchar',
    unique: true,
    nullable: false,
  })
  @Length(2, 30)
  username: string;

  @Column({
    type: 'varchar',
    default: 'Пока ничего не рассказал о себе',
  })
  @Length(2, 200)
  about: string;

  @Column({ default: 'https://i.pravatar.cc/300' })
  avatar: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @OneToMany(() => Wish, (wish) => wish.name)
  wishes: Wish[];

  @OneToMany(() => Offer, (offer) => offer.item)
  offers: Offer[];

  @OneToMany(() => Wishlist, (wishlist) => wishlist.name)
  wishlists: Wishlist[];
}
