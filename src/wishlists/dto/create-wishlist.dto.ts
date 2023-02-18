import {
  IsDefined,
  IsDate,
  Length,
  IsString,
  IsUrl,
  IsNumber,
  IsArray,
} from 'class-validator';
import { User } from 'src/users/entities/user.entity';

export class CreateWishlistDto {
  @IsDefined()
  @IsNumber()
  id: number;

  @IsDate()
  createdAt: Date;

  @IsDate()
  updatedAt: Date;

  @IsString()
  @Length(1, 250)
  name: string;

  @IsString()
  @Length(1, 1500)
  description: string;

  @IsUrl()
  image: string;

  owner: User;

  @IsArray()
  items: [];
}
