declare const _default: {
    type: string;
    host: string;
    port: number;
    username: string;
    password: string;
    database: string;
    entities: (typeof import("../wishlists/entities/wishlist.entity").Wishlist | typeof import("../wishes/entities/wish.entity").Wish | typeof import("../users/entities/user.entity").User | typeof import("../offers/entities/offer.entity").Offer)[];
    synchronize: boolean;
};
export default _default;
