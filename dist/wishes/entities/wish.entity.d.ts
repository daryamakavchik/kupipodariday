import { User } from '../../users/entities/user.entity';
import { Offer } from '../../offers/entities/offer.entity';
export declare class Wish {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    name: string;
    link: string;
    image: string;
    price: number;
    raised: number;
    description: string;
    offers: Offer[];
    owner: User;
    copied: number;
}
