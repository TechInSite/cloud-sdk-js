import {
  ODataGetAllRequestConfig as Base,
  EntityBase,
  Constructable
} from '../../odata-common';
import { oDataUriV2 } from '../uri-conversion';

/**
 * @deprecated Since v1.21.0. Use superclass instead.
 * OData delete request configuration for an entity type.
 *
 * @typeparam EntityT - Type of the entity to setup a request for
 */
class ODataGetAllRequestConfig<
  EntityT extends EntityBase
> extends Base<EntityT> {
  /**
   * Creates an instance of ODataGetAllRequestConfig.
   *
   * @param _entityConstructor - Constructor type of the entity to create a configuration for
   */
  constructor(_entityConstructor: Constructable<EntityT>) {
    super(_entityConstructor, oDataUriV2);
  }
}

export { ODataGetAllRequestConfig as ODataGetAllRequestConfigLegacy };
