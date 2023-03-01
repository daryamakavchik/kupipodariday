import { Offer } from '../offers/entities/offer.entity';
import { Repository, DataSource } from 'typeorm';
import { CreateOfferDto } from './dto/create-offer.dto';
import { User } from 'src/users/entities/user.entity';
import { Wish } from 'src/wishes/entities/wish.entity';
export declare class OffersService {
    private dataSource;
    private offerRepository;
    private wishRepository;
    private userRepository;
    constructor(dataSource: DataSource, offerRepository: Repository<Offer>, wishRepository: Repository<Wish>, userRepository: Repository<User>);
    create(createOfferDto: CreateOfferDto, userId: number): Promise<{}>;
    findAll(): Promise<Offer[]>;
    findOne(id: number): Promise<Offer>;
}
