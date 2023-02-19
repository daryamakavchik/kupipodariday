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
  @IsString()
  @IsNotEmpty()
  @MaxLength(250)
  name: string;

  @IsUrl()
  image: string;

  @IsArray()
  @IsNotEmpty()
  itemsId: any[];
}
