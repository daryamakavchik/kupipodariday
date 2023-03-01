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
exports.WishlistsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const wish_entity_1 = require("../wishes/entities/wish.entity");
const exception_constructor_1 = require("../exceptions/exception-constructor");
const error_constants_1 = require("../exceptions/error-constants");
const wishlist_entity_1 = require("./entities/wishlist.entity");
let WishlistsService = class WishlistsService {
    constructor(wishlistRepository, wishRepository) {
        this.wishlistRepository = wishlistRepository;
        this.wishRepository = wishRepository;
    }
    async create(user, createWishlistDto) {
        const items = await this.wishRepository.find({
            where: { id: (0, typeorm_2.In)(createWishlistDto.itemsId) },
        });
        const wishlist = new wishlist_entity_1.Wishlist();
        wishlist.owner = user;
        wishlist.name = createWishlistDto.name;
        wishlist.image = createWishlistDto.image;
        wishlist.items = items;
        await this.wishlistRepository.save(wishlist);
        return wishlist;
    }
    findAll() {
        return this.wishlistRepository.find({
            relations: ['owner', 'items'],
        });
    }
    async findOneById(id) {
        const wishlist = await this.wishlistRepository.findOne({
            where: { id },
            relations: ['owner', 'items'],
        });
        if (!wishlist) {
            throw new exception_constructor_1.ServerException(error_constants_1.ErrorCode.ListNotFound);
        }
        return wishlist;
    }
    async update(id, updateWishlistDto, userId) {
        var _a;
        const wishlist = await this.findOneById(id);
        if (!wishlist) {
            throw new exception_constructor_1.ServerException(error_constants_1.ErrorCode.WishNotFound);
        }
        if (wishlist.owner.id !== userId) {
            throw new exception_constructor_1.ServerException(error_constants_1.ErrorCode.NoRightsForEdit);
        }
        const items = ((_a = updateWishlistDto.itemsId) === null || _a === void 0 ? void 0 : _a.length)
            ? await this.wishRepository.find({
                where: { id: (0, typeorm_2.In)(updateWishlistDto.itemsId) },
            })
            : [];
        return await this.wishlistRepository.save(Object.assign(Object.assign({}, wishlist), { name: updateWishlistDto.name, image: updateWishlistDto.image, items: items.length === 0 ? wishlist.items : items }));
    }
    async remove(id, userId) {
        const wishlist = await this.findOneById(id);
        if (!wishlist) {
            throw new exception_constructor_1.ServerException(error_constants_1.ErrorCode.ListNotFound);
        }
        if (wishlist.owner.id !== userId) {
            throw new exception_constructor_1.ServerException(error_constants_1.ErrorCode.NoRightsForRemove);
        }
        await this.wishlistRepository.delete(id);
        return wishlist;
    }
};
WishlistsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(wishlist_entity_1.Wishlist)),
    __param(1, (0, typeorm_1.InjectRepository)(wish_entity_1.Wish)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], WishlistsService);
exports.WishlistsService = WishlistsService;
//# sourceMappingURL=wishlists.service.js.map