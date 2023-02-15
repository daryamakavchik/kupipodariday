import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Post,
} from '@nestjs/common';

@Controller('offers')
export class OffersController {
  private offers = [
    {
      id: '1',
      name: 'Sherlock Holmes',
      email: 'smarty@221b.uk',
    },
    {
      id: '2',
      name: 'John H. Whatson',
      email: 'doctor@221b.uk',
    },
    {
      id: '3',
      name: 'Mrs Hudson',
      email: 'hostess@221b.uk',
    },
  ];
  @Get()
  findAll() {
    return this.offers;
  }
}
