import { User } from '../entities/user.entity';
export declare class UserResponseDto {
    id: number;
    username: string;
    about: string;
    avatar: string;
    email: string;
    createdAt: Date;
    updatedAt: Date;
    static getProfile(user: User): UserResponseDto;
}
