import { CreateOfferDto } from './dto/create-offer.dto';
import { OffersService } from './offers.service';
export declare class OffersController {
    private readonly offersService;
    constructor(offersService: OffersService);
    create(req: any, createOfferDto: CreateOfferDto): Promise<{}>;
    findAll(): Promise<import("./entities/offer.entity").Offer[]>;
    findOne(id: string): Promise<import("./entities/offer.entity").Offer>;
}
