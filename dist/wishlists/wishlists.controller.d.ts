import { CreateWishlistDto } from './dto/create-wishlist.dto';
import { WishlistsService } from './wishlists.service';
export declare class WishlistsController {
    private wishlistService;
    constructor(wishlistService: WishlistsService);
    getWishlists(): Promise<import("./entities/wishlist.entity").Wishlist[]>;
    createWishlist(createWishlistDto: CreateWishlistDto, req: any): Promise<import("./entities/wishlist.entity").Wishlist>;
    getWishlistById(id: number): Promise<import("./entities/wishlist.entity").Wishlist>;
    updateWishlistById(id: number, Body: any, req: any): Promise<import("./entities/wishlist.entity").Wishlist>;
    deleteWishlistById(id: number, req: any): Promise<import("./entities/wishlist.entity").Wishlist>;
}
