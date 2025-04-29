// In-memory database for demo purposes only. Not persistent! Data resets on server restart.
// To simulate persistence, you could read/write to a JSON file here (for local dev only).

import { Room } from '../models/Room';
import { Traveller } from '../models/Traveller';
import { TravelGroup } from '../models/TravelGroup';

export const rooms: Room[] = [
  { code: '1001', beds: 2, travellerIds: ['t1', 't2'] },
  { code: '1002', beds: 3, travellerIds: ['t3'] },
  { code: '1003', beds: 1, travellerIds: [] },
];

export const travellers: Traveller[] = [
  { id: 't1', surname: 'Jolie', firstName: 'Angelina', dateOfBirth: '1985-01-05', groupId: 'A123B1' },
  { id: 't2', surname: 'Pitt', firstName: 'Brad', dateOfBirth: '1990-04-02', groupId: 'A123B1' },
  { id: 't3', surname: 'Jordan', firstName: 'Michael', dateOfBirth: '2000-03-03', groupId: 'C456D2' },
];

export const travelGroups: TravelGroup[] = [
  { id: 'A123B1', arrivalDate: '2025-04-20', travellerIds: ['t1', 't2'] },
  { id: 'C456D2', arrivalDate: '2025-04-22', travellerIds: ['t3'] },
]; 