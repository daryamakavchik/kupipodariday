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

export class UpdateWishDto {
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

  @IsUrl()
  owner: string;

  @IsNumber()
  @Min(1)
  @Max(1024)
  description: number;

  @IsArray()
  offers: [];

  @IsNumber()
  copied: number;
}
