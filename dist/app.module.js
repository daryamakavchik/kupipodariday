"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const app_controller_1 = require("./app.controller");
const users_module_1 = require("./users/users.module");
const wishes_module_1 = require("./wishes/wishes.module");
const wishlists_module_1 = require("./wishlists/wishlists.module");
const offers_module_1 = require("./offers/offers.module");
const auth_module_1 = require("./auth/auth.module");
const config_1 = require("@nestjs/config");
const nest_winston_1 = require("nest-winston");
const winston = require("winston");
const config_2 = require("./config/config");
const dbservice_1 = require("./database/dbservice");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            nest_winston_1.WinstonModule.forRoot({
                levels: {
                    critical_error: 0,
                    error: 1,
                    special_warning: 2,
                    another_log_level: 3,
                    info: 4,
                },
                transports: [
                    new winston.transports.Console({ format: winston.format.simple() }),
                    new winston.transports.File({ filename: 'error.log', level: 'error' }),
                ],
            }),
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                load: [config_2.default],
            }),
            typeorm_1.TypeOrmModule.forRootAsync({
                useClass: dbservice_1.DatabaseService,
                inject: [dbservice_1.DatabaseService],
            }),
            users_module_1.UsersModule,
            wishes_module_1.WishesModule,
            wishlists_module_1.WishlistsModule,
            offers_module_1.OffersModule,
            auth_module_1.AuthModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [dbservice_1.DatabaseService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map