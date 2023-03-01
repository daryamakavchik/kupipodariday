import { Wish } from '../../wishes/entities/wish.entity';
import { Wishlist } from '../../wishlists/entities/wishlist.entity';
import { Offer } from '../../offers/entities/offer.entity';
export declare class User {
    id: number;
    username: string;
    about: string;
    avatar: string;
    email: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
    wishes: Wish[];
    wishlist: Wishlist;
    offers: Offer[];
}
