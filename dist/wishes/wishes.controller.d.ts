import { WishesService } from "./wishes.service";
import { CreateWishDto } from "./dto/create-wish.dto";
import { UpdateWishDto } from "./dto/update-wish.dto";
export declare class WishesController {
    private readonly wishesService;
    constructor(wishesService: WishesService);
    create(req: any, createWishDto: CreateWishDto): Promise<{
        owner: import("../users/entities/user.entity").User;
        name: string;
        link: string;
        image: string;
        price: number;
        description: string;
    } & import("./entities/wish.entity").Wish>;
    findLastWishes(): Promise<import("./entities/wish.entity").Wish[]>;
    findTopWishes(): Promise<import("./entities/wish.entity").Wish[]>;
    findOne(id: string): Promise<import("./entities/wish.entity").Wish>;
    update(id: string, req: any, updateWishDto: UpdateWishDto): Promise<{
        name?: string;
        link?: string;
        image?: string;
        price?: number;
        description?: string;
        id: number;
    } & import("./entities/wish.entity").Wish>;
    remove(id: string, req: any): Promise<{}>;
    copyWish(id: string, req: any): Promise<{}>;
}
