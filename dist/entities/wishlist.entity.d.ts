import { Wish } from './wish.entity';
export declare class Wishlist {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    name: string;
    description: string;
    image: string;
    items: Wish[];
}
