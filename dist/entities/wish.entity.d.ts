import { User } from './user.entity';
import { Offer } from './offer.entity';
export declare class Wish {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    name: string;
    link: string;
    image: string;
    price: number;
    raised: number;
    owner: User;
    description: number;
    offers: Offer[];
    copied: number;
}
