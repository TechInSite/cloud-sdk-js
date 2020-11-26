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


import { AttachmentsContext } from './attachments-context';

/**
 * 
 * @export
 * @interface UpdateTaskInstancePayload
 */
export interface UpdateTaskInstancePayload {
    /**
     * The changes to the context of the workflow instance the user task belongs to.
     * @type {object}
     * @memberof UpdateTaskInstancePayload
     */
    context?: object;
    /**
     * 
     * @type {AttachmentsContext}
     * @memberof UpdateTaskInstancePayload
     */
    attachments?: AttachmentsContext;
    /**
     * Specify the new status of the task instance.
     * @type {string}
     * @memberof UpdateTaskInstancePayload
     */
    status?: UpdateTaskInstancePayloadStatusEnum;
    /**
     * Specify the new subject of the task instance. The subject can be at most 255 characters long.
     * @type {string}
     * @memberof UpdateTaskInstancePayload
     */
    subject?: string;
    /**
     * Specify the new description of the task instance. The description can be at most 4000 characters long.
     * @type {string}
     * @memberof UpdateTaskInstancePayload
     */
    description?: string;
    /**
     * Specify the new recipient users of the task instance as a comma-separated list. Specify at most 100 recipient users. The ID of a recipient user can be at most 255 characters long.
     * @type {string}
     * @memberof UpdateTaskInstancePayload
     */
    recipientUsers?: string;
    /**
     * Specify the new recipient groups of the task instance, as a comma-separated list.  Specify at most 100 recipient groups. The ID of a recipient group can be at most 255 characters long.
     * @type {string}
     * @memberof UpdateTaskInstancePayload
     */
    recipientGroups?: string;
    /**
     * Specify the new processor of the task instance. The ID of the processor can be at most 255 characters long and must not contain commas.
     * @type {string}
     * @memberof UpdateTaskInstancePayload
     */
    processor?: string;
    /**
     * Specify the new due date of the task instance.
     * @type {string}
     * @memberof UpdateTaskInstancePayload
     */
    dueDate?: string;
    /**
     * Specify the new priority of the task instance.
     * @type {string}
     * @memberof UpdateTaskInstancePayload
     */
    priority?: UpdateTaskInstancePayloadPriorityEnum;
}

/**
    * @export
    * @enum {string}
    */
export enum UpdateTaskInstancePayloadStatusEnum {
    COMPLETED = 'COMPLETED'
}
/**
    * @export
    * @enum {string}
    */
export enum UpdateTaskInstancePayloadPriorityEnum {
    VERYHIGH = 'VERY_HIGH',
    HIGH = 'HIGH',
    MEDIUM = 'MEDIUM',
    LOW = 'LOW'
}



