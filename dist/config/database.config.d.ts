import { User } from '../users/entities/user.entity';
import { Offer } from '../offers/entities/offer.entity';
import { Wish } from '../wishes/entities/wish.entity';
import { Wishlist } from '../wishlists/entities/wishlist.entity';
declare const _default: (() => {
    type: string;
    host: string;
    port: number;
    username: string;
    password: string;
    database: string;
    entities: (typeof Wishlist | typeof Wish | typeof User | typeof Offer)[];
    synchronize: boolean;
}) & import("@nestjs/config").ConfigFactoryKeyHost<{
    type: string;
    host: string;
    port: number;
    username: string;
    password: string;
    database: string;
    entities: (typeof Wishlist | typeof Wish | typeof User | typeof Offer)[];
    synchronize: boolean;
}>;
export default _default;
