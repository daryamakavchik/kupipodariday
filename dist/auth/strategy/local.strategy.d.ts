import { AuthService } from '../auth.service';
declare const LocalStrategy_base: new (...args: any[]) => any;
export declare class LocalStrategy extends LocalStrategy_base {
    private authService;
    constructor(authService: AuthService);
    validate(username: string, password: string): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        username: string;
        about: string;
        avatar: string;
        email: string;
        wishes: import("../../wishes/entities/wish.entity").Wish[];
        offers: import("../../offers/entities/offer.entity").Offer[];
        wishlists: import("../../wishlists/entities/wishlist.entity").Wishlist[];
    }>;
}
export {};
