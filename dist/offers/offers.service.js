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
const user_entity_1 = require("../users/entities/user.entity");
const wish_entity_1 = require("../wishes/entities/wish.entity");
let OffersService = class OffersService {
    constructor(dataSource, offerRepository, wishRepository, userRepository) {
        this.dataSource = dataSource;
        this.offerRepository = offerRepository;
        this.wishRepository = wishRepository;
        this.userRepository = userRepository;
    }
    async create(createOfferDto, userId) {
        const { itemId, hidden, amount } = createOfferDto;
        const user = await this.userRepository.findOneBy({ id: userId });
        const wish = await this.wishRepository.findOne({
            where: { id: itemId },
            relations: ['owner'],
        });
        if (!wish) {
            throw new Error();
        }
        if (wish.owner.id === user.id) {
            throw new Error();
        }
        const raised = wish.raised + amount;
        if (raised > wish.price) {
            throw new Error();
        }
        else {
            wish.raised = wish.raised + amount;
        }
        const queryRunner = this.dataSource.createQueryRunner();
        await queryRunner.connect();
        await queryRunner.startTransaction();
        try {
            await queryRunner.manager.insert(offer_entity_1.Offer, {
                amount,
                hidden,
                user,
            });
            await queryRunner.manager.save(wish);
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
    findAll() {
        return this.offerRepository.find({
            relations: ['items'],
        });
    }
    findOne(id) {
        return this.offerRepository.findOne({
            where: { id },
            relations: { user: true },
        });
    }
};
OffersService = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, typeorm_1.InjectRepository)(offer_entity_1.Offer)),
    __param(2, (0, typeorm_1.InjectRepository)(wish_entity_1.Wish)),
    __param(3, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.DataSource,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], OffersService);
exports.OffersService = OffersService;
//# sourceMappingURL=offers.service.js.map