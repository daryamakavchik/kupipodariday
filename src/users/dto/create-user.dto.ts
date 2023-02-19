import {
  IsDefined,
  IsDate,
  Length,
  IsNotEmpty,
  IsEmail,
  IsString,
  IsUrl,
  IsStrongPassword,
  IsNumber,
  IsArray,
} from 'class-validator';

export class CreateUserDto {
  // @IsDefined()
  // @IsNumber()
  // id: number;

  // @IsDate()
  // createdAt: Date;

  // @IsDate()
  // updatedAt: Date;

  @IsDefined()
  @IsNotEmpty()
  @Length(2, 30)
  @IsString()
  username: string;

  // @IsString()
  // @Length(2, 200)
  // about: string;

  @IsUrl()
  avatar: string;

  @IsEmail() //make unique
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  // @IsArray()
  // wishes: [];

  // @IsArray()
  // offers: [];

  // @IsArray()
  // wishlists: [];
}
