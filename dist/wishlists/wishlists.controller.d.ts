import { CreateWishlistDto } from './dto/create-wishlist.dto';
import { UpdateWishlistDto } from './dto/update-wishlist.dto';
import { WishlistsService } from './wishlists.service';
export declare class WishlistsController {
    private readonly wishlistsService;
    constructor(wishlistsService: WishlistsService);
    create(req: any, createWishlistDto: CreateWishlistDto): Promise<import("./entities/wishlist.entity").Wishlist>;
    findAll(): Promise<import("./entities/wishlist.entity").Wishlist[]>;
    findOne(id: string): Promise<import("./entities/wishlist.entity").Wishlist>;
    update(id: string, req: any, updateWishlistDto: UpdateWishlistDto): Promise<import("./entities/wishlist.entity").Wishlist>;
    remove(id: string, req: any): Promise<import("./entities/wishlist.entity").Wishlist>;
}
