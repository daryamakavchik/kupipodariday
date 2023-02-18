import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../users/entities/user.entity';
import { WishesService } from 'src/wishes/wishes.service';
import { Repository } from 'typeorm';
import { CreateWishlistDto } from './dto/create-wishlist.dto';
import { UpdateWishlistDto } from '../wishlists/dto/update-wishlist.dto';
import { Wishlist } from './entities/wishlist.entity';

@Injectable()
export class WishlistsService {
  constructor(
    @InjectRepository(Wishlist)
    private wishlishRepository: Repository<Wishlist>,
    private wishService: WishesService,
  ) {}

  async create(createWishlistDto: CreateWishlistDto, owner: User) {
    const wishes = await this.getWishesById(createWishlistDto.items);

    const wishlistData = {
      owner,
      name: createWishlistDto.name,
      image: createWishlistDto.image,
      items: wishes,
    };

    const wishlist = this.wishlishRepository.create(wishlistData);

    return this.wishlishRepository.save(wishlist);
  }
  async findOne(id: number) {
    const wishlist = await this.wishlishRepository.findOne({ where: { id }});
    return wishlist;
  }

  async updateOne(
    wishlistId: number,
    updateWishlistDto: UpdateWishlistDto,
    user: number,
  ) {
    const wish = await this.findOne(wishlistId);
    if (wish.owner.id !== user) {
      return null;
    }
    const wishes = await this.getWishesById(updateWishlistDto.items);

    (wish.name = updateWishlistDto.name || wish.name),
      (wish.image = updateWishlistDto.image || wish.image),
      (wish.items = wishes || wish.items);

    return this.wishlishRepository.save(wish);
  }

  async deleteOne(id: number, owner: number) {
    const wishlist = await this.findOne(id);
    if (!wishlist) {
      throw new NotFoundException();
    }
    if (wishlist.owner.id !== owner) {
      throw new Error('own');
    }
    await this.wishlishRepository
      .createQueryBuilder()
      .delete()
      .from(Wishlist)
      .where('id = :id', { id })
      .execute();

    return wishlist;
  }

  async findMany() {
    const wishlists = this.wishlishRepository.find();
    return wishlists;
  }

  async getWishesById(array: any[]) {
    let resolvedWishes: any[] = [];
    const wishes = array?.map(async (item) => {
      const { owner, offers, ...wish } = await this.wishService.findOne(item);
      return wish;
    });

    if (wishes) {
      for (const asyncWish of wishes) {
        const result = await asyncWish;
        resolvedWishes.push(result);
      }
    }

    return resolvedWishes;
  }
}
