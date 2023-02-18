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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WishesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const wish_entity_1 = require("./entities/wish.entity");
const typeorm_2 = require("typeorm");
let WishesService = class WishesService {
    constructor(wishRepository) {
        this.wishRepository = wishRepository;
    }
    async create(createWishDto, owner) {
        const wishData = Object.assign(Object.assign({}, createWishDto), { owner });
        const wish = this.wishRepository.create(wishData);
        return this.wishRepository.save(wish);
    }
    async findOne(id) {
        const wish = await this.wishRepository.findOne({ where: { id } });
        return wish;
    }
    async updateOne(id, updateWishDto, user) {
        const wish = await this.findOne(id);
        if (wish.owner !== user) {
            throw new Error("own");
        }
        if (wish.offers.length > 0) {
            const { price } = updateWishDto, result = __rest(updateWishDto, ["price"]);
            await this.wishRepository.update({ id }, result);
            return await this.findOne(id);
        }
        await this.wishRepository.update({ id }, updateWishDto);
        return await this.findOne(id);
    }
    async findMany(orderBy, limit) {
        const wishes = await this.wishRepository.find();
        return wishes;
    }
    async getRaised(id) {
        const amount = await this.wishRepository
            .createQueryBuilder("wish")
            .select("wish.raised")
            .addSelect("wish.price")
            .where({ id })
            .getOne();
        return amount;
    }
    async updateRaised(id, raised) {
        await this.wishRepository
            .createQueryBuilder()
            .update(wish_entity_1.Wish)
            .set({ raised })
            .where({ id })
            .execute();
    }
    async updateCopied(id, copied) {
        copied = copied + 1;
        await this.wishRepository
            .createQueryBuilder()
            .update(wish_entity_1.Wish)
            .set({ copied })
            .where({ id })
            .execute();
    }
    async deleteOne(id, userId) {
        const wish = await this.findOne(id);
        if (!wish) {
            throw new common_1.NotFoundException();
        }
        if (+wish.owner !== userId) {
            throw new Error("own");
        }
        await this.wishRepository
            .createQueryBuilder()
            .delete()
            .from(wish_entity_1.Wish)
            .where("id = :id", { id })
            .execute();
        return wish;
    }
    async copyWish(id, userId) {
        const { createdAt, updatedAt, name, link, image, price, description, raised, owner, offers, copied, } = await this.findOne(id);
        const wishCopy = {
            id,
            createdAt,
            updatedAt,
            name,
            link,
            image,
            price,
            description,
            raised,
            owner,
            offers,
            copied,
        };
        await this.create(wishCopy, userId);
        await this.updateCopied(id, copied);
    }
};
WishesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(wish_entity_1.Wish)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], WishesService);
exports.WishesService = WishesService;
//# sourceMappingURL=wishes.service.js.map