import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable, UpdateDateColumn, CreateDateColumn } from 'typeorm';
import { Length, Min, Max, IsUrl } from 'class-validator';
import { User } from 'src/users/entities/user.entity';
import { Wish } from '../../wishes/entities/wish.entity';

@Entity()
export  class Wishlist {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column()
  @Min(1)
  @Max(250)
  name: string;

  @Column()
  @IsUrl()
  image: string;

  @ManyToMany(() => Wish, (wish) => wish.id, { cascade: true })
  @JoinTable()
  items: any[];

  @ManyToOne(() => User)
  @JoinColumn()
  owner: User;
}