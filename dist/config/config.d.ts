import { Offer } from 'src/offers/entities/offer.entity';
import { User } from 'src/users/entities/user.entity';
import { Wish } from 'src/wishes/entities/wish.entity';
import { Wishlist } from 'src/wishlists/entities/wishlist.entity';
declare const _default: () => {
    port: number;
    database: {
        type: string;
        url: string;
        port: number;
        username: string;
        password: string;
        database: string;
        entities: (typeof User | typeof Wish | typeof Wishlist | typeof Offer)[];
        synchronize: boolean;
    };
    jwtSecret: string;
};
export default _default;
