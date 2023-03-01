import { User } from '../../users/entities/user.entity';
import { Offer } from '../../offers/entities/offer.entity';
export declare class Wish {
    id: number;
    name: string;
    link: string;
    image: string;
    price: number;
    raised: number;
    description: string;
    copied: number;
    createdAt: Date;
    updatedAt: Date;
    owner: User;
    offers: Offer[];
}
