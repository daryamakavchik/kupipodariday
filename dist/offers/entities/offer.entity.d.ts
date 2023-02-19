import { User } from '../../users/entities/user.entity';
export declare class Offer {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    item: any;
    amount: number;
    hidden: boolean;
    user: User;
}
