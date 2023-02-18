import { registerAs } from '@nestjs/config';
import { User } from '../users/entities/user.entity';
import { Offer } from '../offers/entities/offer.entity';
import { Wish } from '../wishes/entities/wish.entity';
import { Wishlist } from '../wishlists/entities/wishlist.entity';
import * as dotenv from 'dotenv';

dotenv.config();

export default registerAs('database', () => {
  return {
    type: 'postgres',
    host: process.env.POSTGRES_HOST,
    port: parseInt(process.env.POSTGRES_PORT),
    username: 'student',
    password: 'student',
    database: 'kupipodariday',
    entities: [User, Offer, Wish, Wishlist],
    synchronize: true,
  };
});