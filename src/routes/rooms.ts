import { Router, Request, Response } from 'express';
import { rooms, travellers, travelGroups } from '../config/inMemoryDb';
import { moveTraveller } from '../services/roomService';
import { Room } from '../models/Room';

const router = Router();

// GET /rooms?date=YYYY-MM-DD
router.get('/', (req: Request, res: Response) => {
  const { date } = req.query;
  if (!date || typeof date !== 'string') {
    return res.status(400).json({ error: 'Missing or invalid date parameter' });
  }

  // 1. Find travel groups arriving on the given date
  const groupsToday = travelGroups.filter(g => g.arrivalDate === date);
  const groupIdsToday = new Set(groupsToday.map(g => g.id));

  // 2. Find travellers in those groups
  const travellerIdsToday = new Set(
    travellers.filter(t => groupIdsToday.has(t.groupId)).map(t => t.id)
  );

  // 3. Find rooms with at least one of those travellers
  const occupiedRooms = rooms.filter(room =>
    room.travellerIds.some(id => travellerIdsToday.has(id))
  );

  res.json(occupiedRooms);
});

/**
 * Helper to find a room by code or return a standardized error response.
 */
function findRoomOrError(code: string, res: Response): Room | undefined {
  const room = rooms.find(r => r.code === code);
  if (!room) {
    res.status(404).json({ error: 'Room not found' });
    return undefined;
  }
  return room;
}

/**
 * GET /rooms/:code
 * Returns details for a specific room by its code.
 */
router.get('/:code', (req: Request, res: Response) => {
  const { code } = req.params;
  const room = findRoomOrError(code, res);
  if (!room) return;
  res.json(room);
});

/**
 * POST /rooms/:fromRoomCode/move-traveller
 * Moves a traveller from one room to another.
 */
router.post('/:fromRoomCode/move-traveller', (req: Request, res: Response) => {
  const { fromRoomCode } = req.params;
  const { travellerId, toRoomCode } = req.body;
  if (!travellerId || !toRoomCode) {
    return res.status(400).json({ error: 'travellerId and toRoomCode are required' });
  }
  const result = moveTraveller(fromRoomCode, toRoomCode, travellerId);
  if (result.error) {
    return res.status(400).json({ error: result.error });
  }
  res.json({ fromRoom: result.fromRoom, toRoom: result.toRoom });
});

export default router; 