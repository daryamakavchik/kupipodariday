"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("@nestjs/config");
const user_entity_1 = require("../users/entities/user.entity");
const offer_entity_1 = require("../offers/entities/offer.entity");
const wish_entity_1 = require("../wishes/entities/wish.entity");
const wishlist_entity_1 = require("../wishlists/entities/wishlist.entity");
const dotenv = require("dotenv");
dotenv.config();
exports.default = (0, config_1.registerAs)('database', () => {
    return {
        type: 'postgres',
        host: process.env.POSTGRES_HOST,
        port: parseInt(process.env.POSTGRES_PORT),
        username: process.env.POSTGRES_USER,
        password: process.env.POSTGRES_PASSWORD,
        database: process.env.POSTGRES_DB,
        entities: [user_entity_1.User, offer_entity_1.Offer, wish_entity_1.Wish, wishlist_entity_1.Wishlist],
        synchronize: true,
    };
});
//# sourceMappingURL=database.config.js.map