import { User } from '../users/entities/user.entity';
import { Repository } from 'typeorm';
import { CreateWishlistDto } from './dto/create-wishlist.dto';
import { UpdateWishlistDto } from './dto/update-wishlist.dto';
import { Wish } from 'src/wishes/entities/wish.entity';
import { Wishlist } from './entities/wishlist.entity';
export declare class WishlistsService {
    private wishlistRepository;
    private wishRepository;
    constructor(wishlistRepository: Repository<Wishlist>, wishRepository: Repository<Wish>);
    create(user: User, createWishlistDto: CreateWishlistDto): Promise<Wishlist>;
    findAll(): Promise<Wishlist[]>;
    findOneById(id: number): Promise<Wishlist>;
    update(id: number, updateWishlistDto: UpdateWishlistDto, userId: number): Promise<Wishlist>;
    remove(id: number, userId: number): Promise<Wishlist>;
}
