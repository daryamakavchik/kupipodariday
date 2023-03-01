import { Wish } from "./entities/wish.entity";
import { DataSource, Repository } from "typeorm";
import { CreateWishDto } from "./dto/create-wish.dto";
import { User } from "../users/entities/user.entity";
import { UpdateWishDto } from "./dto/update-wish.dto";
export declare class WishesService {
    private dataSource;
    private wishRepository;
    private userRepository;
    constructor(dataSource: DataSource, wishRepository: Repository<Wish>, userRepository: Repository<User>);
    create(user: User, createWishDto: CreateWishDto): Promise<{
        owner: User;
        name: string;
        link: string;
        image: string;
        price: number;
        description: string;
    } & Wish>;
    findUsersWishes(id: number): Promise<Wish[]>;
    findLastWishes(): Promise<Wish[]>;
    findTopWishes(): Promise<Wish[]>;
    findOne(id: number): Promise<Wish>;
    update(id: number, userId: number, updateWishDto: UpdateWishDto): Promise<{
        name?: string;
        link?: string;
        image?: string;
        price?: number;
        description?: string;
        id: number;
    } & Wish>;
    remove(id: number, userId: number): Promise<{}>;
    copyWish(wishId: number, userId: number): Promise<{}>;
}
