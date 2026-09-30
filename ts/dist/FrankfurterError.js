"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FrankfurterError = void 0;
class FrankfurterError extends Error {
    isFrankfurterError = true;
    sdk = 'Frankfurter';
    code;
    ctx;
    status = -1;
    // `err.notFound` rather than a magic number at every call site.
    get notFound() { return 404 === this.status; }
    constructor(code, msg, ctx) {
        super(msg);
        this.code = code;
        this.ctx = ctx;
    }
}
exports.FrankfurterError = FrankfurterError;
//# sourceMappingURL=FrankfurterError.js.map