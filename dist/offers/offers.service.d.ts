import { Offer } from '../offers/entities/offer.entity';
import { Repository } from 'typeorm';
import { CreateOfferDto } from './dto/create-offer.dto';
import { WishesService } from 'src/wishes/wishes.service';
export declare class OffersService {
    private offerRepository;
    private wishService;
    constructor(offerRepository: Repository<Offer>, wishService: WishesService);
    create(createOfferDto: CreateOfferDto, user: any): Promise<Offer>;
    findMany(): Promise<Offer[]>;
    findOne(id: number): Promise<Offer>;
    checkUser(item: any, id: any): Promise<boolean>;
}
