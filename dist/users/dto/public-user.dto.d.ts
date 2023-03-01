import { User } from '../entities/user.entity';
export declare class UserPublicProfileResponseDto {
    id: number;
    username: string;
    about: string;
    avatar: string;
    createdAt: Date;
    updatedAt: Date;
    static getPublicProfile(user: User): UserPublicProfileResponseDto;
}
