import { Repository } from 'typeorm';
import { Wish } from '../entities/wish.entity';
import { CreateWishDto } from '../dto/create-wish.dto';
import { UpdateWishDto } from '../dto/update-wish.dto';
export declare class WishesService {
    private readonly wishesRepository;
    constructor(wishesRepository: Repository<Wish>);
    findAll(): Promise<Wish[]>;
    findById(id: number): Promise<Wish>;
    removeById(id: number): Promise<import("typeorm").DeleteResult>;
    create(createWishDto: CreateWishDto): Promise<Wish>;
    updateById(id: number, updateWishDto: UpdateWishDto): Promise<import("typeorm").UpdateResult>;
}
