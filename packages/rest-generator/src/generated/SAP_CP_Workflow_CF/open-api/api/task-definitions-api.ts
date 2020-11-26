/* tslint:disable */
/* eslint-disable */
/**
 * Workflow API for Cloud Foundry
 * This API uses the SAP Cloud Platform Workflow service. With the API, you can, for example, start new workflow instances and work with tasks.  Note (relevant only for SAP API Business Hub): For authentication purposes, the API uses OAuth 2.0 security (with JSON Web Token, JWT). Thus, \"Try Out\" only works with an explicitly configured environment. For more information on how to obtain the necessary parameters, please see [Determine Service Configuration Parameters](https://help.sap.com/viewer/e157c391253b4ecd93647bf232d18a83/Cloud/en-US/abb1f66b2c3b4983b6b656654cfc3d2b.html) in the documentation. The OAuth client you use must have [extended scopes](https://help.sap.com/viewer/e157c391253b4ecd93647bf232d18a83/Cloud/en-US/baf2847f6d1c401a83ca3a1427b8ff84.html).  Note: These APIs are designed for loosely coupled clients. This means:  - If workflow service adds fields to responses, the API version number does not increase. Your client must ignore new fields. - The order of fields in responses and of entries in arrays may change. This applies unless the API provides an explicit means to specify the desired order. 
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import globalAxios, { AxiosPromise, AxiosInstance } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { TechnicalError } from '../model';
// @ts-ignore
import { UnauthorizedError } from '../model';
/**
 * TaskDefinitionsApi - axios parameter creator
 * @export
 */
export const TaskDefinitionsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Retrieves task definitions by query parameters.   A task definition is identified by the ID of the respective activity within a workflow definition (for example, usertask1) and the workflow definition ID.  The workflow definition ID is version independent. That means, this API assumes that task definitions are semantically the same if they span several  workflow versions and therefore have the same identifier. The latest workflow definition version is expected to contain the leading property values of the task definition.  At the moment, filtering is limited to the $skip and $top parameters for paging through the available task definitions.  The returned task definitions are sorted in descending order of their creation time.  Roles permitted to execute this operation:   - Global roles: WorkflowViewer, WorkflowAdmin
         * @summary Retrieve definitions by query parameters
         * @param {number} [$skip] The number of records you want to skip from the beginning. You can skip at most 4000 records. To indicate a result range that starts, for example, at 1001, combine the $skip with the $top parameter. If not specified, no records are skipped. You can use this parameter only once. Refer also to the $top parameter.
         * @param {number} [$top] The number of records you want to show. You can get at most 1000 records per API call. To indicate a result range that starts, for example, at 1001, combine the $top with the $skip parameter. If not specified, 100 records are returned. You can use this parameter only once. Refer also to the $skip parameter.
         * @param {'allpages' | 'none'} [$inlinecount] Specify whether the total count of the task definitions should be returned as a value of the X-Total-Count response header. To enable the header, use the \&#39;allpages\&#39; setting. To disable the header, use the \&#39;none\&#39; setting. The values are case-sensitive. You can use this parameter only once.
         * @param {'attributeDefinitions'} [$expand] You can request custom task attributes to become part of the task output by specifying the value \&#39;attributeDefinitions\&#39; for the \&#39;$expand\&#39; parameter. Otherwise, if the \&#39;$expand\&#39; parameter is not specified, the \&#39;attributeDefinitions\&#39; field is not included into the output. Note that labels as well as the order of the custom task attributes in which they are returned, are taken from the latest versions of the workflow definitions where the corresponding task definition exists.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        v1TaskDefinitionsGet: async ($skip?: number, $top?: number, $inlinecount?: 'allpages' | 'none', $expand?: 'attributeDefinitions', options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/v1/task-definitions`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Oauth2_AuthorizationCode required
            // oauth required
            if (configuration && configuration.accessToken) {
                const localVarAccessTokenValue = typeof configuration.accessToken === 'function'
                    ? await configuration.accessToken("Oauth2_AuthorizationCode", [])
                    : await configuration.accessToken;
                localVarHeaderParameter["Authorization"] = "Bearer " + localVarAccessTokenValue;
            }

            // authentication Oauth2_ClientCredentials required
            // oauth required
            if (configuration && configuration.accessToken) {
                const localVarAccessTokenValue = typeof configuration.accessToken === 'function'
                    ? await configuration.accessToken("Oauth2_ClientCredentials", [])
                    : await configuration.accessToken;
                localVarHeaderParameter["Authorization"] = "Bearer " + localVarAccessTokenValue;
            }

            if ($skip !== undefined) {
                localVarQueryParameter['$skip'] = $skip;
            }

            if ($top !== undefined) {
                localVarQueryParameter['$top'] = $top;
            }

            if ($inlinecount !== undefined) {
                localVarQueryParameter['$inlinecount'] = $inlinecount;
            }

            if ($expand !== undefined) {
                localVarQueryParameter['$expand'] = $expand;
            }


    
            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                query.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * TaskDefinitionsApi - functional programming interface
 * @export
 */
export const TaskDefinitionsApiFp = function(configuration?: Configuration) {
    return {
        /**
         * Retrieves task definitions by query parameters.   A task definition is identified by the ID of the respective activity within a workflow definition (for example, usertask1) and the workflow definition ID.  The workflow definition ID is version independent. That means, this API assumes that task definitions are semantically the same if they span several  workflow versions and therefore have the same identifier. The latest workflow definition version is expected to contain the leading property values of the task definition.  At the moment, filtering is limited to the $skip and $top parameters for paging through the available task definitions.  The returned task definitions are sorted in descending order of their creation time.  Roles permitted to execute this operation:   - Global roles: WorkflowViewer, WorkflowAdmin
         * @summary Retrieve definitions by query parameters
         * @param {number} [$skip] The number of records you want to skip from the beginning. You can skip at most 4000 records. To indicate a result range that starts, for example, at 1001, combine the $skip with the $top parameter. If not specified, no records are skipped. You can use this parameter only once. Refer also to the $top parameter.
         * @param {number} [$top] The number of records you want to show. You can get at most 1000 records per API call. To indicate a result range that starts, for example, at 1001, combine the $top with the $skip parameter. If not specified, 100 records are returned. You can use this parameter only once. Refer also to the $skip parameter.
         * @param {'allpages' | 'none'} [$inlinecount] Specify whether the total count of the task definitions should be returned as a value of the X-Total-Count response header. To enable the header, use the \&#39;allpages\&#39; setting. To disable the header, use the \&#39;none\&#39; setting. The values are case-sensitive. You can use this parameter only once.
         * @param {'attributeDefinitions'} [$expand] You can request custom task attributes to become part of the task output by specifying the value \&#39;attributeDefinitions\&#39; for the \&#39;$expand\&#39; parameter. Otherwise, if the \&#39;$expand\&#39; parameter is not specified, the \&#39;attributeDefinitions\&#39; field is not included into the output. Note that labels as well as the order of the custom task attributes in which they are returned, are taken from the latest versions of the workflow definitions where the corresponding task definition exists.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async v1TaskDefinitionsGet($skip?: number, $top?: number, $inlinecount?: 'allpages' | 'none', $expand?: 'attributeDefinitions', options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<object>>> {
            const localVarAxiosArgs = await TaskDefinitionsApiAxiosParamCreator(configuration).v1TaskDefinitionsGet($skip, $top, $inlinecount, $expand, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * TaskDefinitionsApi - factory interface
 * @export
 */
export const TaskDefinitionsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * Retrieves task definitions by query parameters.   A task definition is identified by the ID of the respective activity within a workflow definition (for example, usertask1) and the workflow definition ID.  The workflow definition ID is version independent. That means, this API assumes that task definitions are semantically the same if they span several  workflow versions and therefore have the same identifier. The latest workflow definition version is expected to contain the leading property values of the task definition.  At the moment, filtering is limited to the $skip and $top parameters for paging through the available task definitions.  The returned task definitions are sorted in descending order of their creation time.  Roles permitted to execute this operation:   - Global roles: WorkflowViewer, WorkflowAdmin
         * @summary Retrieve definitions by query parameters
         * @param {number} [$skip] The number of records you want to skip from the beginning. You can skip at most 4000 records. To indicate a result range that starts, for example, at 1001, combine the $skip with the $top parameter. If not specified, no records are skipped. You can use this parameter only once. Refer also to the $top parameter.
         * @param {number} [$top] The number of records you want to show. You can get at most 1000 records per API call. To indicate a result range that starts, for example, at 1001, combine the $top with the $skip parameter. If not specified, 100 records are returned. You can use this parameter only once. Refer also to the $skip parameter.
         * @param {'allpages' | 'none'} [$inlinecount] Specify whether the total count of the task definitions should be returned as a value of the X-Total-Count response header. To enable the header, use the \&#39;allpages\&#39; setting. To disable the header, use the \&#39;none\&#39; setting. The values are case-sensitive. You can use this parameter only once.
         * @param {'attributeDefinitions'} [$expand] You can request custom task attributes to become part of the task output by specifying the value \&#39;attributeDefinitions\&#39; for the \&#39;$expand\&#39; parameter. Otherwise, if the \&#39;$expand\&#39; parameter is not specified, the \&#39;attributeDefinitions\&#39; field is not included into the output. Note that labels as well as the order of the custom task attributes in which they are returned, are taken from the latest versions of the workflow definitions where the corresponding task definition exists.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        v1TaskDefinitionsGet($skip?: number, $top?: number, $inlinecount?: 'allpages' | 'none', $expand?: 'attributeDefinitions', options?: any): AxiosPromise<Array<object>> {
            return TaskDefinitionsApiFp(configuration).v1TaskDefinitionsGet($skip, $top, $inlinecount, $expand, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * TaskDefinitionsApi - object-oriented interface
 * @export
 * @class TaskDefinitionsApi
 * @extends {BaseAPI}
 */
export class TaskDefinitionsApi extends BaseAPI {
    /**
     * Retrieves task definitions by query parameters.   A task definition is identified by the ID of the respective activity within a workflow definition (for example, usertask1) and the workflow definition ID.  The workflow definition ID is version independent. That means, this API assumes that task definitions are semantically the same if they span several  workflow versions and therefore have the same identifier. The latest workflow definition version is expected to contain the leading property values of the task definition.  At the moment, filtering is limited to the $skip and $top parameters for paging through the available task definitions.  The returned task definitions are sorted in descending order of their creation time.  Roles permitted to execute this operation:   - Global roles: WorkflowViewer, WorkflowAdmin
     * @summary Retrieve definitions by query parameters
     * @param {number} [$skip] The number of records you want to skip from the beginning. You can skip at most 4000 records. To indicate a result range that starts, for example, at 1001, combine the $skip with the $top parameter. If not specified, no records are skipped. You can use this parameter only once. Refer also to the $top parameter.
     * @param {number} [$top] The number of records you want to show. You can get at most 1000 records per API call. To indicate a result range that starts, for example, at 1001, combine the $top with the $skip parameter. If not specified, 100 records are returned. You can use this parameter only once. Refer also to the $skip parameter.
     * @param {'allpages' | 'none'} [$inlinecount] Specify whether the total count of the task definitions should be returned as a value of the X-Total-Count response header. To enable the header, use the \&#39;allpages\&#39; setting. To disable the header, use the \&#39;none\&#39; setting. The values are case-sensitive. You can use this parameter only once.
     * @param {'attributeDefinitions'} [$expand] You can request custom task attributes to become part of the task output by specifying the value \&#39;attributeDefinitions\&#39; for the \&#39;$expand\&#39; parameter. Otherwise, if the \&#39;$expand\&#39; parameter is not specified, the \&#39;attributeDefinitions\&#39; field is not included into the output. Note that labels as well as the order of the custom task attributes in which they are returned, are taken from the latest versions of the workflow definitions where the corresponding task definition exists.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TaskDefinitionsApi
     */
    public v1TaskDefinitionsGet($skip?: number, $top?: number, $inlinecount?: 'allpages' | 'none', $expand?: 'attributeDefinitions', options?: any) {
        return TaskDefinitionsApiFp(this.configuration).v1TaskDefinitionsGet($skip, $top, $inlinecount, $expand, options).then((request) => request(this.axios, this.basePath));
    }
}