import { User } from "src/users/entities/user.entity";
import { Wish } from "../../wishes/entities/wish.entity";
export declare class Wishlist {
    id: number;
    name: string;
    description: string;
    image: string;
    createdAt: Date;
    updatedAt: Date;
    owner: User;
    items: Wish[];
}
