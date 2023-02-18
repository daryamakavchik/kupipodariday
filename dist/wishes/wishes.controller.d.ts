import { WishesService } from './wishes.service';
import { CreateWishDto } from './dto/create-wish.dto';
import { UpdateWishDto } from './dto/update-wish.dto';
export declare class WishesController {
    private wishesService;
    constructor(wishesService: WishesService);
    createWish(createWishDto: CreateWishDto, req: any): Promise<import("./entities/wish.entity").Wish>;
    getLast(): Promise<import("./entities/wish.entity").Wish[]>;
    getTop(): Promise<import("./entities/wish.entity").Wish[]>;
    getWishById(id: number): Promise<import("./entities/wish.entity").Wish>;
    updateWish(id: number, updateWishDto: UpdateWishDto, req: any): Promise<import("./entities/wish.entity").Wish>;
    deleteWish(id: number, req: any): Promise<import("./entities/wish.entity").Wish>;
    copyWish(id: number, req: any): Promise<{}>;
}
