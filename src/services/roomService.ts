import { Room } from '../models/Room';
import { rooms } from '../config/inMemoryDb';

/**
 * Moves a traveller from one room to another, with validation.
 * @param fromRoomCode - The code of the room to move from
 * @param toRoomCode - The code of the room to move to
 * @param travellerId - The traveller's ID
 * @returns { fromRoom?: Room, toRoom?: Room, error?: string }
 */
export function moveTraveller(
  fromRoomCode: string,
  toRoomCode: string,
  travellerId: string
): { fromRoom?: Room; toRoom?: Room; error?: string } {
  const fromRoom = rooms.find(r => r.code === fromRoomCode);
  const toRoom = rooms.find(r => r.code === toRoomCode);
  if (!fromRoom) return { error: 'From room not found' };
  if (!toRoom) return { error: 'To room not found' };
  if (!fromRoom.travellerIds.includes(travellerId)) return { error: 'Traveller not in from room' };
  if (toRoom.travellerIds.length >= toRoom.beds) return { error: 'To room is already full' };
  // Move traveller
  fromRoom.travellerIds = fromRoom.travellerIds.filter(id => id !== travellerId);
  toRoom.travellerIds.push(travellerId);
  return { fromRoom, toRoom };
} 