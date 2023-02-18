import { Wish } from '../../wishes/entities/wish.entity';
import { Wishlist } from '../../wishlists/entities/wishlist.entity';
import { Offer } from '../../offers/entities/offer.entity';
export declare class User {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    username: string;
    about: string;
    avatar: string;
    email: string;
    password: string;
    wishes: Wish[];
    offers: Offer[];
    wishlists: Wishlist[];
}
