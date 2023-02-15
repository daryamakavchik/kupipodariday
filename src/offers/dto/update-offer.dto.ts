import { IsDefined, IsDate, IsUrl, IsNumber, IsBoolean } from 'class-validator';

export class UpdateOfferDto {
  @IsDefined()
  @IsNumber()
  id: number;

  @IsDate()
  createdAt: Date;

  @IsDate()
  updatedAt: Date;

  @IsNumber()
  user: number;

  @IsUrl()
  item: string;

  @IsNumber()
  amount: number;

  @IsBoolean()
  hidden: boolean;
}
