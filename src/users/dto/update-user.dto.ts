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
  MinLength,
  MaxLength
} from 'class-validator';

export class UpdateUserDto {
  @IsString()
  @MinLength(2)
  @MaxLength(30)
  username: string;

  @IsString()
  @MinLength(2)
  @MaxLength(200)
  about: string;

  @IsUrl()
  avatar: string;

  @IsEmail()
  email: string;

  @IsString()
  password: string;
}
