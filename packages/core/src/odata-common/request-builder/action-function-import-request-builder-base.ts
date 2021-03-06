import {
  DestinationOptions,
  Destination,
  DestinationNameAndJwt
} from '../../connectivity/scp-cf';
import { MethodRequestBuilderBase } from '../request-builder/request-builder-base';
import { ODataFunctionImportRequestConfig } from '../request/odata-function-import-request-config';
import { ODataActionImportRequestConfig } from '../../odata-v4';

/**
 * Create OData request to execute a action or function import.
 * @typeparam ParametersT - Type of the function import parameters
 * @typeparam ReturnT - Type of the function import return value
 */
export abstract class ActionFunctionImportRequestBuilderBase<
  ParametersT,
  ReturnT
> extends MethodRequestBuilderBase<
  | ODataFunctionImportRequestConfig<ParametersT>
  | ODataActionImportRequestConfig<ParametersT>
> {
  /**
   * Base class for function  and actions imports
   * @param responseTransformer - Transformation function for the response
   * @param requestConfig - Request config for a action or funciton import
   */
  protected constructor(
    readonly responseTransformer: (data: any) => ReturnT,
    requestConfig:
      | ODataFunctionImportRequestConfig<ParametersT>
      | ODataActionImportRequestConfig<ParametersT>
  ) {
    super(requestConfig);
  }

  /**
   * Execute request
   * @param destination - Destination to execute the request against
   * @param options - Options to employ when fetching destinations
   * @returns A promise resolving to the requested return type
   */
  async execute(
    destination: Destination | DestinationNameAndJwt,
    options?: DestinationOptions
  ): Promise<ReturnT> {
    return this.build(destination, options)
      .then(request => request.execute())
      .then(({ data }) => this.responseTransformer(data));
  }
}
