import { User } from 'src/users/entities/user.entity';
export declare class UpdateWishDto {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    name: string;
    link: string;
    image: string;
    price: number;
    raised: number;
    owner: User;
    description: string;
    offers: [];
    copied: number;
}
