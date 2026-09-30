import { Context } from './Context';
declare class FrankfurterError extends Error {
    isFrankfurterError: boolean;
    sdk: string;
    code: string;
    ctx: Context;
    status: number;
    get notFound(): boolean;
    constructor(code: string, msg: string, ctx: Context);
}
export { FrankfurterError };
