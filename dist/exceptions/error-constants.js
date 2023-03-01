"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.code2status = exports.code2message = exports.ErrorCode = void 0;
const common_1 = require("@nestjs/common");
var ErrorCode;
(function (ErrorCode) {
    ErrorCode[ErrorCode["LoginOrPasswordIncorrect"] = 100] = "LoginOrPasswordIncorrect";
    ErrorCode[ErrorCode["UserAlreadyExist"] = 101] = "UserAlreadyExist";
    ErrorCode[ErrorCode["AccessDenied"] = 102] = "AccessDenied";
    ErrorCode[ErrorCode["UserNotFound"] = 103] = "UserNotFound";
    ErrorCode[ErrorCode["UsersNotFound"] = 104] = "UsersNotFound";
    ErrorCode[ErrorCode["WishNotFound"] = 105] = "WishNotFound";
    ErrorCode[ErrorCode["NoRightsForEdit"] = 106] = "NoRightsForEdit";
    ErrorCode[ErrorCode["NoRightsForRemove"] = 107] = "NoRightsForRemove";
    ErrorCode[ErrorCode["CantEdit"] = 108] = "CantEdit";
    ErrorCode[ErrorCode["CantOfferForSelf"] = 109] = "CantOfferForSelf";
    ErrorCode[ErrorCode["OfferIsLarge"] = 110] = "OfferIsLarge";
    ErrorCode[ErrorCode["ListNotFound"] = 111] = "ListNotFound";
    ErrorCode[ErrorCode["ValidationError"] = 112] = "ValidationError";
})(ErrorCode = exports.ErrorCode || (exports.ErrorCode = {}));
exports.code2message = new Map([
    [ErrorCode.LoginOrPasswordIncorrect, 'Некорректная пара логин-пароль'],
    [ErrorCode.UserAlreadyExist, 'Такой пользователь уже существует'],
    [ErrorCode.AccessDenied, 'Доступ запрещен'],
    [ErrorCode.UserNotFound, 'Пользователь не найден'],
    [ErrorCode.UsersNotFound, 'Поиск пользователей не дал результатов'],
    [ErrorCode.WishNotFound, 'Подарок не найден'],
    [ErrorCode.NoRightsForEdit, 'Недостаточно прав для редактирования'],
    [ErrorCode.NoRightsForRemove, 'Недостаточно прав для удаления'],
    [ErrorCode.CantEdit, 'Невозможно редактировать, т.к. есть сборы'],
    [ErrorCode.CantOfferForSelf, 'Невозможно скинуться на свой подарок'],
    [ErrorCode.OfferIsLarge, 'Размер вклада слишком большой'],
    [ErrorCode.ListNotFound, 'Список подарков не найден'],
    [ErrorCode.ValidationError, 'Переданы некоректные значения'],
]);
exports.code2status = new Map([
    [ErrorCode.LoginOrPasswordIncorrect, common_1.HttpStatus.BAD_REQUEST],
    [ErrorCode.UserAlreadyExist, common_1.HttpStatus.BAD_REQUEST],
    [ErrorCode.AccessDenied, common_1.HttpStatus.FORBIDDEN],
    [ErrorCode.UserNotFound, common_1.HttpStatus.NOT_FOUND],
    [ErrorCode.UsersNotFound, common_1.HttpStatus.NOT_FOUND],
    [ErrorCode.WishNotFound, common_1.HttpStatus.NOT_FOUND],
    [ErrorCode.NoRightsForEdit, common_1.HttpStatus.FORBIDDEN],
    [ErrorCode.NoRightsForRemove, common_1.HttpStatus.FORBIDDEN],
    [ErrorCode.CantEdit, common_1.HttpStatus.BAD_REQUEST],
    [ErrorCode.CantOfferForSelf, common_1.HttpStatus.FORBIDDEN],
    [ErrorCode.OfferIsLarge, common_1.HttpStatus.BAD_REQUEST],
    [ErrorCode.ListNotFound, common_1.HttpStatus.NOT_FOUND],
    [ErrorCode.ValidationError, common_1.HttpStatus.BAD_REQUEST],
]);
//# sourceMappingURL=error-constants.js.map