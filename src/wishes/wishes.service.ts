import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Wish } from './entities/wish.entity';
import { CreateWishDto } from './dto/create-wish.dto';
import { UpdateWishDto } from './dto/update-wish.dto';

@Injectable()
export class WishesService {
  constructor(
    @InjectRepository(Wish)
    private readonly wishesRepository: Repository<Wish>,
  ) {}

  findAll(): Promise<Wish[]> {
    return this.wishesRepository.find();
  }

  findById(id: number): Promise<Wish> {
    return this.wishesRepository.findOneBy({ id });
  }

  removeById(id: number) {
    return this.wishesRepository.delete({ id });
  }

  create(createWishDto: CreateWishDto): Promise<Wish> {
    const {
      id,
      createdAt,
      updatedAt,
      name,
      link,
      image,
      price,
      raised,
      owner,
      description,
      offers,
      copied,
    } = createWishDto;
    const newWish = new Wish();
    newWish.id = id;
    (newWish.createdAt = createdAt),
      (newWish.updatedAt = updatedAt),
      (newWish.name = name),
      (newWish.link = link),
      (newWish.image = image),
      (newWish.price = price);
    newWish.raised = raised;
    newWish.owner = owner;
    newWish.description = description;
    newWish.offers = offers;
    newWish.copied = copied;
    return this.wishesRepository.save(newWish);
  }

  updateById(id: number, updateWishDto: UpdateWishDto) {
    const {
      createdAt,
      updatedAt,
      name,
      link,
      image,
      price,
      raised,
      owner,
      description,
      offers,
      copied,
    } = updateWishDto;
    const newWish = new Wish();
    newWish.id = id;
    (newWish.createdAt = createdAt),
      (newWish.updatedAt = updatedAt),
      (newWish.name = name),
      (newWish.link = link),
      (newWish.image = image),
      (newWish.price = price);
    newWish.raised = raised;
    newWish.owner = owner;
    newWish.description = description;
    newWish.offers = offers;
    newWish.copied = copied;
    return this.wishesRepository.update({ id }, newWish);
  }
}
