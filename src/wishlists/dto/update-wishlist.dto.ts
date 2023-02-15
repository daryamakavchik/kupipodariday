import {
  IsDefined,
  IsDate,
  Length,
  IsString,
  IsUrl,
  IsNumber,
  IsArray,
} from 'class-validator';

export class UpdateWishlistDto {
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

  @IsArray()
  items: [];
}
