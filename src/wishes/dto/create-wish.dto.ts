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

  @IsUrl()
  link: string;

  @IsUrl() //validate URL
  image: string;

  @IsNumber()
  price: number;

  @IsNumber()
  raised: number;

  owner: User;

  @IsNumber()
  @Min(1)
  @Max(1024)
  description: number;

  @IsArray()
  offers: Offer[];

  @IsNumber()
  copied: number;
}
