import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Offer } from './entities/offer.entity';
import { CreateOfferDto } from './dto/create-offer.dto';
import { UpdateOfferDto } from './dto/update-offer.dto';

@Injectable()
export class OffersService {
  constructor(
    @InjectRepository(Offer)
    private readonly offerRepository: Repository<Offer>,
  ) {}

  findAll(): Promise<Offer[]> {
    return this.offerRepository.find();
  }

  findById(id: number): Promise<Offer> {
    return this.offerRepository.findOneBy({ id });
  }

  removeById(id: number) {
    return this.offerRepository.delete({ id });
  }

  create(createOfferDto: CreateOfferDto): Promise<Offer> {
    const { id, createdAt, updatedAt, user, item, amount, hidden } =
      createOfferDto;
    const newOffer = new Offer();
    newOffer.id = id;
    (newOffer.createdAt = createdAt),
      (newOffer.updatedAt = updatedAt),
      (newOffer.user = user),
      (newOffer.item = item),
      (newOffer.amount = amount),
      (newOffer.hidden = hidden);
    return this.offerRepository.save(newOffer);
  }

  updateById(id: number, updateOfferDto: UpdateOfferDto) {
    const { createdAt, updatedAt, user, item, amount, hidden } = updateOfferDto;
    const newOffer = new Offer();
    newOffer.id = id;
    (newOffer.createdAt = createdAt),
      (newOffer.updatedAt = updatedAt),
      (newOffer.user = user),
      (newOffer.item = item),
      (newOffer.amount = amount),
      (newOffer.hidden = hidden);
    return this.offerRepository.update({ id }, newOffer);
  }
}
