import { User } from './user.entity';
export declare class Offer {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    user: User;
    item: string;
    amount: number;
    hidden: boolean;
}
