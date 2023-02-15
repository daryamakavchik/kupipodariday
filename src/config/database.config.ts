import { registerAs } from '@nestjs/config';
import { User } from '../users/entities/user.entity';
import { Wish } from '../wishes/entities/wish.entity';
import { Wishlist } from '../wishlists/entities/wishlist.entity';
import { Offer } from '../offers/entities/offer.entity';

require('dotenv').config();

export default registerAs('database', () => {
  return {
    type: 'postgres',
    host: process.env.POSTGRES_HOST,
    port: parseInt(process.env.POSTGRES_PORT),
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    entities: [User, Wish, Wishlist, Offer],
    synchronize: true,
  };
});