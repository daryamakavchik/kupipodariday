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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const users_service_1 = require("../users/users.service");
const bcrypt_1 = require("bcrypt");
const error_constants_1 = require("../exceptions/error-constants");
const exception_constructor_1 = require("../exceptions/exception-constructor");
let AuthService = class AuthService {
    constructor(jwtService, userService) {
        this.jwtService = jwtService;
        this.userService = userService;
    }
    auth(user) {
        const payload = { sub: user.id };
        return { access_token: this.jwtService.sign(payload) };
    }
    async validatePassword(email, password) {
        const user = await this.userService.findByEmail(email);
        if (!user) {
            throw new exception_constructor_1.ServerException(error_constants_1.ErrorCode.LoginOrPasswordIncorrect);
        }
        const matched = await bcrypt_1.default.compare(password, user.password);
        if (!matched) {
            throw new exception_constructor_1.ServerException(error_constants_1.ErrorCode.LoginOrPasswordIncorrect);
        }
        return user;
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [jwt_1.JwtService,
        users_service_1.UsersService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map