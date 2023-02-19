import {
  IsDefined,
  IsDate,
  Length,
  IsString,
  IsUrl,
  IsNumber,
  Min,
  Max,
  IsArray,
} from 'class-validator';
import { Offer } from 'src/offers/entities/offer.entity';
import { User } from 'src/users/entities/user.entity';

export class CreateWishDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsUrl()
  @IsNotEmpty()
  link: string;

  @IsUrl()
  image: string;

  @IsInt()
  @IsNotEmpty()
  price: number;

  @IsString()
  @MinLength(1)
  @MaxLength(1024)
  description: string;
}