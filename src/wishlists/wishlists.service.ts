import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Wishlist } from './entities/wishlist.entity';
import { CreateWishlistDto } from './dto/create-wishlist.dto';
import { UpdateWishlistDto } from './dto/update-wishlist.dto';

@Injectable()
export class WishlistsService {
  constructor(
    @InjectRepository(Wishlist)
    private readonly wishlistRepository: Repository<Wishlist>,
  ) {}

  findAll(): Promise<Wishlist[]> {
    return this.wishlistRepository.find();
  }

  findById(id: number): Promise<Wishlist> {
    return this.wishlistRepository.findOneBy({ id });
  }

  removeById(id: number) {
    return this.wishlistRepository.delete({ id });
  }

  create(createWishDto: CreateWishlistDto): Promise<Wishlist> {
    return this.wishlistRepository.save(createWishDto);
  }

  updateById(id: number, updateWishDto: UpdateWishlistDto) {
    return this.wishlistRepository.update({ id }, updateWishDto);
  }
}
