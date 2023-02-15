import { Wish } from './wish.entity';
import { Wishlist } from './wishlist.entity';
import { Offer } from './offer.entity';
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
