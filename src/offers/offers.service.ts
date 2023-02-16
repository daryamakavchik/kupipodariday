import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Offer }  from '../offers/entities/offer.entity';
import { Repository } from 'typeorm';
import { CreateOfferDto } from './dto/create-offer.dto';
import { WishesService } from 'src/wishes/wishes.service';

@Injectable()
export class OffersService {
  constructor(
    @InjectRepository(Offer)
    private offerRepository: Repository<Offer>,
    private wishService: WishesService,
  ) {}

  async create(createOfferDto: CreateOfferDto, user: any) {
    const checkUser = await this.checkUser(createOfferDto.item, user);

    if (checkUser) {
      throw new Error('own offer');
    }

    const { price, raised } = await this.wishService.getRaised(
      +createOfferDto.item,
    );

    const newRaised = raised + createOfferDto.amount;
    if (price < newRaised) {
      throw new Error('too much');
    }

    const offerData = {
      user,
      item: createOfferDto.item,
      amount: createOfferDto.amount,
      hidden: createOfferDto.hidden,
    };
    const offer = await this.offerRepository.create(offerData);
    await this.wishService.updateRaised(+createOfferDto.item, newRaised);

    return this.offerRepository.save(offer);
  }

  async findMany() {
    const offers = await this.offerRepository.find();
    return offers;
  }

  async findOne(id: number) {
    const offer = await this.offerRepository.findOne({ where: { id }});
    return offer;
  }

  async checkUser(item, id) {
    const itemOwnerId = await this.wishService.findOne(item);
    return itemOwnerId.owner === id;
  }
}