import { CreateOfferDto } from './dto/create-offer.dto';
import { OffersService } from './offers.service';
export declare class OffersController {
    private offerService;
    constructor(offerService: OffersService);
    create(req: any, createOfferDto: CreateOfferDto): Promise<import("./entities/offer.entity").Offer>;
    getOffers(): Promise<import("./entities/offer.entity").Offer[]>;
    getOfferById(id: number): Promise<import("./entities/offer.entity").Offer>;
}
