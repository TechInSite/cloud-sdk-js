import {
  createTestEntity,
  createTestEntityReturnId
} from '@sap-cloud-sdk/test-services-e2e/v4/test-service/action-imports';
import { destination } from './test-util';
import { deleteEntity } from './test-utils/test-entity-operations';

const entityKey = 999;

describe('action', () => {
  beforeEach(async () => deleteEntity(entityKey, destination));
  afterEach(async () => deleteEntity(entityKey, destination));

  it('should return entity', async () => {
    const response = await createTestEntity({ id: entityKey }).execute(
      destination
    );
    expect(response.keyTestEntity).toBe(entityKey);
  });

  it('should return single number', async () => {
    const response = await createTestEntityReturnId({ id: entityKey }).execute(
      destination
    );
    expect(response).toBe(entityKey);
  });
});
