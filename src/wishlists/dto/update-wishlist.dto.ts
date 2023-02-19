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

export class UpdateWislistDto {
  @IsString()
  name: string;

  @IsUrl()
  image: string;

  @IsArray()
  itemsId: any[];
}
