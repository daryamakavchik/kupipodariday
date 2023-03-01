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
exports.WishlistsController = void 0;
const common_1 = require("@nestjs/common");
const jwt_auth_guard_1 = require("../auth/guards/jwt-auth.guard");
const create_wishlist_dto_1 = require("./dto/create-wishlist.dto");
const update_wishlist_dto_1 = require("./dto/update-wishlist.dto");
const wishlists_service_1 = require("./wishlists.service");
const common_2 = require("@nestjs/common");
const wish_intercept_1 = require("../interceptors/wish-intercept");
let WishlistsController = class WishlistsController {
    constructor(wishlistsService) {
        this.wishlistsService = wishlistsService;
    }
    create(req, createWishlistDto) {
        const { user } = req;
        return this.wishlistsService.create(user, createWishlistDto);
    }
    findAll() {
        return this.wishlistsService.findAll();
    }
    findOne(id) {
        return this.wishlistsService.findOneById(Number(id));
    }
    update(id, req, updateWishlistDto) {
        const userId = req.user.id;
        return this.wishlistsService.update(Number(id), updateWishlistDto, userId);
    }
    remove(id, req) {
        const userId = req.user.id;
        return this.wishlistsService.remove(Number(id), userId);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_wishlist_dto_1.CreateWishlistDto]),
    __metadata("design:returntype", void 0)
], WishlistsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], WishlistsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], WishlistsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Req)()),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, update_wishlist_dto_1.UpdateWishlistDto]),
    __metadata("design:returntype", void 0)
], WishlistsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], WishlistsController.prototype, "remove", null);
WishlistsController = __decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_2.UseInterceptors)(wish_intercept_1.WishInterceptor),
    (0, common_1.Controller)('wishlistlists'),
    __metadata("design:paramtypes", [wishlists_service_1.WishlistsService])
], WishlistsController);
exports.WishlistsController = WishlistsController;
//# sourceMappingURL=wishlists.controller.js.map