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
exports.UsersController = void 0;
const common_1 = require("@nestjs/common");
const jwt_auth_guard_1 = require("../auth/guards/jwt-auth.guard");
const users_service_1 = require("./users.service");
const wishes_service_1 = require("../wishes/wishes.service");
const update_user_dto_1 = require("./dto/update-user.dto");
const common_2 = require("@nestjs/common");
const user_intercept_1 = require("../interceptors/user-intercept");
let UsersController = class UsersController {
    constructor(usersService, wishesService) {
        this.usersService = usersService;
        this.wishesService = wishesService;
    }
    findMe(req) {
        return req.user;
    }
    update(req, updateUserDto) {
        return this.usersService.updateOne(req.user, updateUserDto);
    }
    async findMeWishes(req) {
        const { id } = req.user;
        return this.wishesService.findUsersWishes(id);
    }
    async findOne(username) {
        const user = await this.usersService.findByUsername(username);
        if (!user) {
            throw new Error();
        }
        return user;
    }
    async findUsersWishes(username) {
        const user = await this.usersService.findByUsername(username);
        if (!user) {
            throw new Error();
        }
        return this.wishesService.findUsersWishes(user.id);
    }
    async findMany(query) {
        return await this.usersService.findMany(query);
    }
};
__decorate([
    (0, common_1.Get)('/me'),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "findMe", null);
__decorate([
    (0, common_1.Patch)('/me'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, update_user_dto_1.UpdateUserDto]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "update", null);
__decorate([
    (0, common_1.Get)('/me/wishes'),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "findMeWishes", null);
__decorate([
    (0, common_1.Get)(':username'),
    __param(0, (0, common_1.Param)('username')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)(':username/wishes'),
    __param(0, (0, common_1.Param)('username')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "findUsersWishes", null);
__decorate([
    (0, common_1.Post)('find'),
    __param(0, (0, common_1.Body)('query')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "findMany", null);
UsersController = __decorate([
    (0, common_2.UseInterceptors)(user_intercept_1.UserInterceptor),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Controller)('users'),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        wishes_service_1.WishesService])
], UsersController);
exports.UsersController = UsersController;
//# sourceMappingURL=users.controller.js.map