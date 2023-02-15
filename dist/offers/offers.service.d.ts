import { Repository } from 'typeorm';
import { Offer } from '../entities/offer.entity';
import { CreateOfferDto } from '../dto/create-offer.dto';
import { UpdateOfferDto } from '../dto/update-offer.dto';
export declare class OffersService {
    private readonly offerRepository;
    constructor(offerRepository: Repository<Offer>);
    findAll(): Promise<Offer[]>;
    findById(id: number): Promise<Offer>;
    removeById(id: number): Promise<import("typeorm").DeleteResult>;
    create(createOfferDto: CreateOfferDto): Promise<Offer>;
    updateById(id: number, updateOfferDto: UpdateOfferDto): Promise<import("typeorm").UpdateResult>;
}
