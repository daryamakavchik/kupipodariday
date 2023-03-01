"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../auth/constants/constants");
const offer_entity_1 = require("../offers/entities/offer.entity");
const user_entity_1 = require("../users/entities/user.entity");
const wish_entity_1 = require("../wishes/entities/wish.entity");
const wishlist_entity_1 = require("../wishlists/entities/wishlist.entity");
exports.default = () => ({
    port: parseInt(process.env.PORT, 10) || 8000,
    database: {
        type: process.env.DATABASE_TYPE || 'postgres',
        url: process.env.DATABASE_URL || 'localhost',
        port: parseInt(process.env.DATABASE_PORT, 10) || 5432,
        username: process.env.DATABASE_USER || 'student',
        password: process.env.DATABASE_PASSWORD || 'student',
        database: process.env.DATABASE_NAME || 'kupipodariday',
        entities: [user_entity_1.User, wish_entity_1.Wish, wishlist_entity_1.Wishlist, offer_entity_1.Offer],
        synchronize: false,
    },
    jwtSecret: constants_1.jwtConstant.secret,
});
//# sourceMappingURL=config.js.map