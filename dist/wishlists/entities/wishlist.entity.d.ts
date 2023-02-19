import { User } from 'src/users/entities/user.entity';
export declare class Wishlist {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    name: string;
    image: string;
    items: any[];
    owner: User;
}
