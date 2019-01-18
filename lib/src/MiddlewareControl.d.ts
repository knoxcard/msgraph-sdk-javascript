/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */
/**
 * @module MiddlewareControl
 */
import { MiddlewareOption } from "./IMiddlewareOption";
/**
 * @class
 * Class representing MiddlewareControl
 */
export declare class MiddlewareControl {
    /**
     * @private
     * A member holding map of MiddlewareOption
     */
    private middlewareOptions;
    /**
     * @constructor
     * Creates an instance of MiddlewareControl
     * @param {MiddlewareOption[]} middlewareOptions - The array of middlewareOptions
     * @returns The instance of MiddlewareControl
     */
    constructor(middlewareOptions: MiddlewareOption[]);
    /**
     * @public
     * To get the middleware option using the class name of the option
     * @param {string} name - The class name of the strongly types option class
     * @returns The middleware option
     */
    getMiddlewareOption(name: string): MiddlewareOption;
}
