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
exports.WishlistsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const wishes_service_1 = require("../wishes/wishes.service");
const typeorm_2 = require("typeorm");
const wishlist_entity_1 = require("./entities/wishlist.entity");
let WishlistsService = class WishlistsService {
    constructor(wishlishRepository, wishService) {
        this.wishlishRepository = wishlishRepository;
        this.wishService = wishService;
    }
    async create(createWishlistDto, owner) {
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
    async findOne(id) {
        const wishlist = await this.wishlishRepository.findOne({ where: { id } });
        return wishlist;
    }
    async updateOne(wishlistId, updateWishlistDto, user) {
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
    async deleteOne(id, owner) {
        const wishlist = await this.findOne(id);
        if (!wishlist) {
            throw new common_1.NotFoundException();
        }
        if (wishlist.owner.id !== owner) {
            throw new Error('own');
        }
        await this.wishlishRepository
            .createQueryBuilder()
            .delete()
            .from(wishlist_entity_1.Wishlist)
            .where('id = :id', { id })
            .execute();
        return wishlist;
    }
    async findMany() {
        const wishlists = this.wishlishRepository.find();
        return wishlists;
    }
    async getWishesById(array) {
        let resolvedWishes = [];
        const wishes = array === null || array === void 0 ? void 0 : array.map(async (item) => {
            const _a = await this.wishService.findOne(item), { owner, offers } = _a, wish = __rest(_a, ["owner", "offers"]);
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
};
WishlistsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(wishlist_entity_1.Wishlist)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        wishes_service_1.WishesService])
], WishlistsService);
exports.WishlistsService = WishlistsService;
//# sourceMappingURL=wishlists.service.js.map