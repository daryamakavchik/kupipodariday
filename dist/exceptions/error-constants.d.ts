import { HttpStatus } from '@nestjs/common';
export declare enum ErrorCode {
    LoginOrPasswordIncorrect = 100,
    UserAlreadyExist = 101,
    AccessDenied = 102,
    UserNotFound = 103,
    UsersNotFound = 104,
    WishNotFound = 105,
    NoRightsForEdit = 106,
    NoRightsForRemove = 107,
    CantEdit = 108,
    CantOfferForSelf = 109,
    OfferIsLarge = 110,
    ListNotFound = 111,
    ValidationError = 112
}
export declare const code2message: Map<ErrorCode, string>;
export declare const code2status: Map<ErrorCode, HttpStatus>;
