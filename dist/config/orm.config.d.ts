declare const _default: {
    type: string;
    host: string;
    port: number;
    username: string;
    password: string;
    database: string;
    entities: (typeof import("../offers/entities/offer.entity").Offer | typeof import("../wishes/entities/wish.entity").Wish | typeof import("../users/entities/user.entity").User | typeof import("../wishlists/entities/wishlist.entity").Wishlist)[];
    synchronize: boolean;
};
export default _default;
