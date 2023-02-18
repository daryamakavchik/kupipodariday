import { Wish } from "./entities/wish.entity";
import { Repository } from "typeorm";
import { CreateWishDto } from "./dto/create-wish.dto";
import { User } from "../users/entities/user.entity";
import { UpdateWishDto } from "./dto/update-wish.dto";
export declare class WishesService {
    private wishRepository;
    constructor(wishRepository: Repository<Wish>);
    create(createWishDto: CreateWishDto, owner: User): Promise<Wish>;
    findOne(id: number): Promise<Wish>;
    updateOne(id: any, updateWishDto: UpdateWishDto, user: any): Promise<Wish>;
    findMany(orderBy: string, limit: number): Promise<Wish[]>;
    getRaised(id: number): Promise<Wish>;
    updateRaised(id: number, raised: number): Promise<void>;
    updateCopied(id: any, copied: any): Promise<void>;
    deleteOne(id: number, userId: number): Promise<Wish>;
    copyWish(id: number, userId: User): Promise<void>;
}
