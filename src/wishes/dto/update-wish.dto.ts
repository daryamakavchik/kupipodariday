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
import { User } from 'src/users/entities/user.entity';

export class UpdateWishDto {
  @IsString()
  name: string;

  @IsUrl()
  link: string;

  @IsUrl()
  image: string;

  @IsInt()
  price: number;

  @IsString()
  @MinLength(1)
  @MaxLength(1024)
  description: string;
}