import { ServiceNameFormatter } from '../../service-name-formatter';
import { swaggerDefinitionForFunctionImport } from '../../swagger-parser/swagger-parser';
import {
  EdmxAction,
  EdmxActionImport,
  parseActionImport,
  parseActions
} from '../../edmx-parser/v4';
import { ServiceMetadata } from '../../edmx-parser/edmx-file-reader';
import { VdmActionImport, VdmComplexType, VdmEntity } from '../../vdm-types';
import { parseActionImportReturnTypes } from '../common/action-function-return-types';
import { transformActionImportBase } from '../common/action-import';
import { hasUnsupportedParameterTypes } from '../edmx-to-vdm-util';
import { findActionFunctionByImportName } from './action-function-util';

function findActionForActionImport(
  actions: EdmxAction[],
  actionImport: EdmxActionImport
): EdmxAction | undefined {
  return findActionFunctionByImportName(actions, actionImport.Action, 'action');
}

const extractResponse = (response: string) => `${response}.value`;

export function generateActionImportsV4(
  serviceMetadata: ServiceMetadata,
  entities: VdmEntity[],
  complexTypes: Omit<VdmComplexType, 'factoryName'>[],
  formatter: ServiceNameFormatter
): VdmActionImport[] {
  const actions = parseActions(serviceMetadata.edmx.root);
  const actionImports = parseActionImport(serviceMetadata.edmx.root);

  return actionImports
    .map(actionImport => {
      const edmxAction = findActionForActionImport(actions, actionImport);

      if (!edmxAction) {
        return undefined;
      }

      const httpMethod = 'post';
      const swaggerDefinition = swaggerDefinitionForFunctionImport(
        actionImport.Name,
        httpMethod,
        serviceMetadata.swagger
      );
      // TODO 1571 remove when supporting entity type as parameter
      if (hasUnsupportedParameterTypes(edmxAction.Name, edmxAction.Parameter)) {
        return undefined;
      }

      return {
        ...transformActionImportBase(
          actionImport,
          edmxAction.Parameter || [],
          swaggerDefinition,
          formatter
        ),
        httpMethod,
        returnType: parseActionImportReturnTypes(
          edmxAction.ReturnType?.Type,
          entities,
          complexTypes,
          extractResponse,
          serviceMetadata.edmx.oDataVersion
        )
      };
    })
    .filter(e => e !== undefined) as VdmActionImport[];
}
