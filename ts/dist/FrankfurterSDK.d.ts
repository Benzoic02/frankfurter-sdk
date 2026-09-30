import { CoverageEntity } from './entity/CoverageEntity';
import { CurrencyEntity } from './entity/CurrencyEntity';
import { ProviderEntity } from './entity/ProviderEntity';
import { RateEntity } from './entity/RateEntity';
export type * from './FrankfurterTypes';
import { inspect } from 'node:util';
import type { Context, Feature } from './types';
import { config } from './Config';
import { FrankfurterEntityBase } from './FrankfurterEntityBase';
import { Utility } from './utility/Utility';
import { BaseFeature } from './feature/base/BaseFeature';
declare const stdutil: Utility;
declare class FrankfurterSDK {
    _mode: string;
    _options: any;
    _utility: Utility;
    _features: Feature[];
    _rootctx: Context;
    constructor(options?: any);
    options(): any;
    utility(): any;
    prepare(fetchargs?: any): Promise<any>;
    direct(fetchargs?: any): Promise<Error | {
        ok: boolean;
        status: number;
        headers: any;
        data: any;
        err?: undefined;
    } | {
        ok: boolean;
        err: any;
        status?: undefined;
        headers?: undefined;
        data?: undefined;
    }>;
    _rawRequest(fetchargs?: any): Promise<Error | {
        ok: boolean;
        status: number;
        headers: any;
        data: any;
        err?: undefined;
    } | {
        ok: boolean;
        err: any;
        status?: undefined;
        headers?: undefined;
        data?: undefined;
    }>;
    graphql(query: string, variables?: any, ctrl?: any): Promise<any>;
    Coverage(entopts?: Record<string, any>): CoverageEntity;
    Currency(entopts?: Record<string, any>): CurrencyEntity;
    Provider(entopts?: Record<string, any>): ProviderEntity;
    Rate(entopts?: Record<string, any>): RateEntity;
    static test(testoptsarg?: any, sdkoptsarg?: any): FrankfurterSDK;
    tester(testopts?: any, sdkopts?: any): FrankfurterSDK;
    toJSON(): {
        name: string;
    };
    toString(): string;
    [inspect.custom](): string;
}
declare const SDK: typeof FrankfurterSDK;
export { stdutil, config, BaseFeature, FrankfurterEntityBase, FrankfurterSDK, SDK, };
