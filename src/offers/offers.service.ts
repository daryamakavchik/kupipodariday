import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Offer }  from '../offers/entities/offer.entity';
import { Repository, DataSource } from 'typeorm';
import { CreateOfferDto } from './dto/create-offer.dto';
import { WishesService } from 'src/wishes/wishes.service';
import { User } from 'src/users/entities/user.entity';
import { Wish } from 'src/wishes/entities/wish.entity';

@Injectable()
export class OffersService {
  constructor(
    private dataSource: DataSource,
    @InjectRepository(Offer)
    private offerRepository: Repository<Offer>,
    @InjectRepository(Wish)
    private wishRepository: Repository<Wish>,
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async create(createOfferDto: CreateOfferDto, userId: number) {
    const { itemId, hidden, amount } = createOfferDto;
    const user = await this.userRepository.findOneBy({ id: userId });
    const wish = await this.wishRepository.findOne({
      where: { id: itemId },
      relations: ['owner'],
    });

    if (!wish) {
          throw new Error()
    }

    if (wish.owner.id === user.id) {
      throw new Error()
    }

    const raised = wish.raised + amount;

    if (raised > wish.price) {
      throw new Error()
    } else {
      wish.raised = wish.raised + amount;
    }

    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      await queryRunner.manager.insert(Offer, {
        amount,
        hidden,
        user,
        //item: wish,
      });
      await queryRunner.manager.save(wish);
      await queryRunner.commitTransaction();
      return {};
    } catch (err) {
      await queryRunner.rollbackTransaction();
      return false;
    } finally {
      await queryRunner.release();
    }
  }

  findAll() {
    return this.offerRepository.find({
      relations: ['items'],
    });
  }

  findOne(id: number) {
    return this.offerRepository.findOne({
      where: { id },
      relations: { user: true },
    });
  }
}