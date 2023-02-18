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
exports.OffersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const offer_entity_1 = require("../offers/entities/offer.entity");
const typeorm_2 = require("typeorm");
const wishes_service_1 = require("../wishes/wishes.service");
let OffersService = class OffersService {
    constructor(offerRepository, wishService) {
        this.offerRepository = offerRepository;
        this.wishService = wishService;
    }
    async create(createOfferDto, user) {
        const checkUser = await this.checkUser(createOfferDto.item, user);
        if (checkUser) {
            throw new Error('own offer');
        }
        const { price, raised } = await this.wishService.getRaised(+createOfferDto.item);
        const newRaised = raised + createOfferDto.amount;
        if (price < newRaised) {
            throw new Error('too much');
        }
        const offerData = {
            user,
            item: createOfferDto.item,
            amount: createOfferDto.amount,
            hidden: createOfferDto.hidden,
        };
        const offer = await this.offerRepository.create(offerData);
        await this.wishService.updateRaised(+createOfferDto.item, newRaised);
        return this.offerRepository.save(offer);
    }
    async findMany() {
        const offers = await this.offerRepository.find();
        return offers;
    }
    async findOne(id) {
        const offer = await this.offerRepository.findOne({ where: { id } });
        return offer;
    }
    async checkUser(item, id) {
        const itemOwnerId = await this.wishService.findOne(item);
        return itemOwnerId.owner === id;
    }
};
OffersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(offer_entity_1.Offer)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        wishes_service_1.WishesService])
], OffersService);
exports.OffersService = OffersService;
//# sourceMappingURL=offers.service.js.map