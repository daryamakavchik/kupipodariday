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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserPublicProfileResponseDto = void 0;
const class_validator_1 = require("class-validator");
class UserPublicProfileResponseDto {
    static getPublicProfile(user) {
        const { id, username, about, avatar, createdAt, updatedAt } = user;
        return {
            id,
            username,
            about,
            avatar,
            createdAt,
            updatedAt,
        };
    }
}
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], UserPublicProfileResponseDto.prototype, "id", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UserPublicProfileResponseDto.prototype, "username", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UserPublicProfileResponseDto.prototype, "about", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UserPublicProfileResponseDto.prototype, "avatar", void 0);
__decorate([
    (0, class_validator_1.IsDate)(),
    __metadata("design:type", Date)
], UserPublicProfileResponseDto.prototype, "createdAt", void 0);
__decorate([
    (0, class_validator_1.IsDate)(),
    __metadata("design:type", Date)
], UserPublicProfileResponseDto.prototype, "updatedAt", void 0);
exports.UserPublicProfileResponseDto = UserPublicProfileResponseDto;
//# sourceMappingURL=public-user.dto.js.map