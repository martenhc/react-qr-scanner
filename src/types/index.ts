import { Result } from '@zxing/library';

export type OnErrorFunction = (error: Error) => void;

export type Primitive = null | undefined | string | number | boolean | symbol | bigint;
