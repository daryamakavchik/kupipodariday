import { Repository } from 'typeorm';
import { Wishlist } from '../entities/wishlist.entity';
import { CreateWishlistDto } from '../dto/create-wishlist.dto';
import { UpdateWishlistDto } from '../dto/update-wishlist.dto';
export declare class WishlistsService {
    private readonly wishlistRepository;
    constructor(wishlistRepository: Repository<Wishlist>);
    findAll(): Promise<Wishlist[]>;
    findById(id: number): Promise<Wishlist>;
    removeById(id: number): Promise<import("typeorm").DeleteResult>;
    create(createWishDto: CreateWishlistDto): Promise<Wishlist>;
    updateById(id: number, updateWishDto: UpdateWishlistDto): Promise<import("typeorm").UpdateResult>;
}
