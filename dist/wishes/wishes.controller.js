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
exports.WishesController = void 0;
const common_1 = require("@nestjs/common");
const wishes_service_1 = require("./wishes.service");
const jwt_auth_guard_1 = require("../auth/guards/jwt-auth.guard");
const create_wish_dto_1 = require("./dto/create-wish.dto");
const update_wish_dto_1 = require("./dto/update-wish.dto");
const common_2 = require("@nestjs/common");
const wish_intercept_1 = require("../interceptors/wish-intercept");
let WishesController = class WishesController {
    constructor(wishesService) {
        this.wishesService = wishesService;
    }
    create(req, createWishDto) {
        return this.wishesService.create(req.user, createWishDto);
    }
    findLastWishes() {
        return this.wishesService.findLastWishes();
    }
    findTopWishes() {
        return this.wishesService.findTopWishes();
    }
    findOne(id) {
        return this.wishesService.findOne(Number(id));
    }
    update(id, req, updateWishDto) {
        const userId = req.user.id;
        return this.wishesService.update(Number(id), Number(userId), updateWishDto);
    }
    remove(id, req) {
        const userId = req.user.id;
        return this.wishesService.remove(Number(id), Number(userId));
    }
    copyWish(id, req) {
        const userId = req.user.id;
        return this.wishesService.copyWish(Number(id), Number(userId));
    }
};
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_wish_dto_1.CreateWishDto]),
    __metadata("design:returntype", void 0)
], WishesController.prototype, "create", null);
__decorate([
    (0, common_2.UseInterceptors)(wish_intercept_1.WishInterceptor),
    (0, common_1.Get)("/last"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], WishesController.prototype, "findLastWishes", null);
__decorate([
    (0, common_2.UseInterceptors)(wish_intercept_1.WishInterceptor),
    (0, common_1.Get)("/top"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], WishesController.prototype, "findTopWishes", null);
__decorate([
    (0, common_2.UseInterceptors)(wish_intercept_1.WishInterceptor),
    (0, common_1.Get)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], WishesController.prototype, "findOne", null);
__decorate([
    (0, common_2.UseInterceptors)(wish_intercept_1.WishInterceptor),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Patch)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Req)()),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, update_wish_dto_1.UpdateWishDto]),
    __metadata("design:returntype", void 0)
], WishesController.prototype, "update", null);
__decorate([
    (0, common_2.UseInterceptors)(wish_intercept_1.WishInterceptor),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Delete)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], WishesController.prototype, "remove", null);
__decorate([
    (0, common_2.UseInterceptors)(wish_intercept_1.WishInterceptor),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)(":id/copy"),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], WishesController.prototype, "copyWish", null);
WishesController = __decorate([
    (0, common_1.Controller)("wishes"),
    __metadata("design:paramtypes", [wishes_service_1.WishesService])
], WishesController);
exports.WishesController = WishesController;
//# sourceMappingURL=wishes.controller.js.map