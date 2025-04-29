import { isValidRoomCode } from '../../src/models/Room';
import { isValidTraveller } from '../../src/models/Traveller';
import { isValidGroupId } from '../../src/models/TravelGroup';

describe('Validation Helpers', () => {
  test('isValidRoomCode', () => {
    expect(isValidRoomCode('1234')).toBe(true);
    expect(isValidRoomCode('abcd')).toBe(false);
    expect(isValidRoomCode('12')).toBe(false);
    expect(isValidRoomCode('12345')).toBe(false);
  });

  test('isValidTraveller', () => {
    expect(isValidTraveller({ id: 't1', surname: 'Smith', firstName: 'John', dateOfBirth: '1980-01-01', groupId: 'A123B1' })).toBe(true);
    expect(isValidTraveller({ id: 't2', surname: '', firstName: 'Jane', dateOfBirth: '1990-01-01', groupId: 'A123B1' })).toBe(false);
  });

  test('isValidGroupId', () => {
    expect(isValidGroupId('A123B1')).toBe(true);
    expect(isValidGroupId('0123B1')).toBe(false); // starts with 0
    expect(isValidGroupId('A123BC')).toBe(false); // 3 letters
    expect(isValidGroupId('A12345')).toBe(true);
    expect(isValidGroupId('A1234')).toBe(false); // too short
  });
}); 