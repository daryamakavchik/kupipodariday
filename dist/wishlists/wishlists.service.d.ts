import { User } from '../users/entities/user.entity';
import { WishesService } from 'src/wishes/wishes.service';
import { Repository } from 'typeorm';
import { CreateWishlistDto } from './dto/create-wishlist.dto';
import { UpdateWislistDto } from './dto/update-wishlist.dto';
import { Wishlist } from './entities/wishlist.entity';
export declare class WishlistsService {
    private wishlishRepository;
    private wishService;
    constructor(wishlishRepository: Repository<Wishlist>, wishService: WishesService);
    create(createWishlistDto: CreateWishlistDto, owner: User): Promise<Wishlist>;
    findOne(id: number): Promise<Wishlist>;
    updateOne(wishlistId: number, updateWishlistDto: UpdateWislistDto, user: number): Promise<Wishlist>;
    deleteOne(id: number, owner: number): Promise<Wishlist>;
    findMany(): Promise<Wishlist[]>;
    getWishesById(array: any[]): Promise<any[]>;
}
