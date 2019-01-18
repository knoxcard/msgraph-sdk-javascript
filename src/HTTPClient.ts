/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */

/**
 * @module HTTPClient
 */

import { Context } from "./IContext";
import { Middleware } from "./IMiddleware";

/**
 * @class
 * Class representing HTTPClient
 */
export class HTTPClient {

    /**
     * @private
     * A member holding first middleware of the middleware chain
     */
    private middleware: Middleware;

    /**
     * @constructor
     * Creates an instance of a HTTPClient
     * @param {Middleware} middleware - The first middleware of the middleware chain
     */
    constructor(middleware: Middleware) {
        this.middleware = middleware;
    }

    /**
     * @public
     * @async
     * To send the request through the middleware chain
     * @param {Context} context - The context of a request 
     * @returns A promise that resolves to the Context
     */
    public async sendRequest(context: Context): Promise<Context> {
        try {
            await this.middleware.execute(context);
            return context;
        } catch (error) {
            throw error;
        }
    }
}
