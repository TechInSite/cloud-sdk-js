import {
  TestEntity,
  TestEntityMultiLink,
  TestEntitySingleLink
} from '../../../test/test-util/test-services/v4/test-service';
import { asc } from '../../odata-common/order';
import { getExpandV4 } from './get-expand';

describe('get expand', () => {
  it('for first level expand without sub-query', () => {
    expect(
      getExpandV4(
        [
          TestEntity.ALL_FIELDS,
          TestEntity.TO_SINGLE_LINK,
          TestEntity.TO_MULTI_LINK
        ],
        TestEntity
      ).expand
    ).toBe('*,to_SingleLink,to_MultiLink');
  });

  it('for single link with sub-query', () => {
    expect(getExpandV4([testExpandSingleLink.expand], TestEntity).expand).toBe(
      `${testExpandSingleLink.odataStr}`
    );
  });

  it('for multi link with sub-query', () => {
    expect(getExpandV4([testExpandMultiLink.expand], TestEntity).expand).toBe(
      `${testExpandMultiLink.odataStr}`
    );
  });
});

const testExpandSingleLink = {
  expand: TestEntity.TO_SINGLE_LINK.select(
    TestEntitySingleLink.STRING_PROPERTY,
    TestEntitySingleLink.BOOLEAN_PROPERTY
  ),
  odataStr: 'to_SingleLink($select=StringProperty,BooleanProperty)'
};

const testExpandMultiLink = {
  expand: TestEntity.TO_MULTI_LINK.select(
    TestEntityMultiLink.STRING_PROPERTY,
    TestEntityMultiLink.BOOLEAN_PROPERTY
  )
    .orderBy(asc(TestEntityMultiLink.STRING_PROPERTY))
    .filter(TestEntityMultiLink.STRING_PROPERTY.equals('test'))
    .top(1)
    .skip(1),
  odataStr:
    "to_MultiLink($select=StringProperty,BooleanProperty;$filter=(StringProperty eq 'test');$skip=1;$top=1;$orderby=StringProperty asc)"
};
