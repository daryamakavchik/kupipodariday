import { User } from 'src/users/entities/user.entity';
export declare class CreateWishlistDto {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    name: string;
    description: string;
    image: string;
    owner: User;
    items: [];
}
