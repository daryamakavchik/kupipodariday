"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServerException = void 0;
const common_1 = require("@nestjs/common");
const error_constants_1 = require("./error-constants");
class ServerException extends common_1.HttpException {
    constructor(code) {
        super(`${error_constants_1.code2message.get(code)}`, Number(error_constants_1.code2status.get(code)));
    }
}
exports.ServerException = ServerException;
//# sourceMappingURL=exception-constructor.js.map