"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WishesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const wish_entity_1 = require("./entities/wish.entity");
const typeorm_2 = require("typeorm");
const user_entity_1 = require("../users/entities/user.entity");
let WishesService = class WishesService {
    constructor(dataSource, wishRepository, userRepository) {
        this.dataSource = dataSource;
        this.wishRepository = wishRepository;
        this.userRepository = userRepository;
    }
    async create(user, createWishDto) {
        const wish = this.wishRepository.save(Object.assign(Object.assign({}, createWishDto), { owner: user }));
        return wish;
    }
    findUsersWishes(id) {
        return this.wishRepository.find({
            where: {
                owner: {
                    id,
                },
            },
        });
    }
    findLastWishes() {
        return this.wishRepository.find({
            relations: {
                owner: true,
                offers: true,
            },
            order: {
                createdAt: 'DESC',
            },
            take: 40,
        });
    }
    findTopWishes() {
        return this.wishRepository.find({
            relations: {
                owner: true,
                offers: true,
            },
            order: {
                copied: 'DESC',
            },
            take: 20,
        });
    }
    findOne(id) {
        return this.wishRepository.findOne({
            where: { id },
            relations: {
                owner: true,
                offers: true,
            },
        });
    }
    async update(id, userId, updateWishDto) {
        const candidate = await this.findOne(id);
        if (!candidate) {
            throw new Error();
        }
        if (candidate.offers.length > 0) {
            throw new Error();
        }
        if (candidate.owner.id !== userId) {
            throw new Error();
        }
        return this.wishRepository.save(Object.assign({ id }, updateWishDto));
    }
    async remove(id, userId) {
        const candidate = await this.findOne(id);
        if (!candidate) {
            throw new Error();
        }
        if (candidate.owner.id !== userId) {
            throw new Error();
        }
        await this.wishRepository.delete({ id });
        return {};
    }
    async copyWish(wishId, userId) {
        const originalWish = await this.wishRepository.findOneBy({ id: wishId });
        if (!originalWish) {
            throw new Error();
        }
        const user = await this.userRepository.findOneBy({ id: userId });
        if (!user) {
            throw new Error();
        }
        const wishData = {
            name: originalWish.name,
            description: originalWish.description,
            link: originalWish.link,
            image: originalWish.image,
            price: originalWish.price,
        };
        originalWish.copied += 1;
        const queryRunner = this.dataSource.createQueryRunner();
        await queryRunner.connect();
        await queryRunner.startTransaction();
        try {
            await queryRunner.manager.insert(wish_entity_1.Wish, Object.assign(Object.assign({}, wishData), { owner: user }));
            await queryRunner.manager.save(originalWish);
            await queryRunner.commitTransaction();
            return {};
        }
        catch (err) {
            await queryRunner.rollbackTransaction();
            return false;
        }
        finally {
            await queryRunner.release();
        }
    }
};
WishesService = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, typeorm_1.InjectRepository)(wish_entity_1.Wish)),
    __param(2, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.DataSource,
        typeorm_2.Repository,
        typeorm_2.Repository])
], WishesService);
exports.WishesService = WishesService;
//# sourceMappingURL=wishes.service.js.map