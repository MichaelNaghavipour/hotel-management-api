import { Router, Request, Response } from 'express';
import { rooms, travellers, travelGroups } from '../config/inMemoryDb';

const router = Router();

/**
 * GET /groups/:groupId/rooms
 * Returns all rooms that have travellers belonging to the specified groupId.
 */
router.get('/:groupId/rooms', (req: Request, res: Response) => {
  const { groupId } = req.params;
  const group = travelGroups.find(g => g.id === groupId);
  if (!group) {
    return res.status(404).json({ error: 'Group not found' });
  }

  // Find all travellers in this group
  const groupTravellerIds = new Set(group.travellerIds);

  // Find all rooms with at least one traveller from this group
  const groupRooms = rooms.filter(room =>
    room.travellerIds.some(id => groupTravellerIds.has(id))
  );

  res.json(groupRooms);
});

export default router; 