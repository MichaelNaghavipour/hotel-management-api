import { moveTraveller } from '../../src/services/roomService';
import { rooms } from '../../src/config/inMemoryDb';

describe('moveTraveller', () => {
  beforeEach(() => {
    // Reset rooms to initial state for each test
    rooms[0].travellerIds = ['t1', 't2']; // 1001
    rooms[1].travellerIds = ['t3'];       // 1002
    rooms[2].travellerIds = [];           // 1003
    rooms[3].travellerIds = [];           // 1004
    rooms[4].travellerIds = [];           // 1005
  });

  it('moves a traveller successfully', () => {
    const result = moveTraveller('1001', '1002', 't1');
    expect(result.error).toBeUndefined();
    expect(result.fromRoom?.travellerIds).toEqual(['t2']);
    expect(result.toRoom?.travellerIds).toEqual(['t3', 't1']);
  });

  it('returns error if from room does not exist', () => {
    const result = moveTraveller('9999', '1002', 't1');
    expect(result.error).toBe('From room not found');
  });

  it('returns error if to room does not exist', () => {
    const result = moveTraveller('1001', '9999', 't1');
    expect(result.error).toBe('To room not found');
  });

  it('returns error if traveller not in from room', () => {
    const result = moveTraveller('1001', '1002', 'not-in-room');
    expect(result.error).toBe('Traveller not in from room');
  });

  it('returns error if to room is full', () => {
    rooms[1].travellerIds = ['t3', 't4', 't5']; // 1002 has 3 beds
    const result = moveTraveller('1001', '1002', 't1');
    expect(result.error).toBe('To room is already full');
  });
}); 