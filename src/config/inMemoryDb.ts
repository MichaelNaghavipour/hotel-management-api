import { Room } from '../models/Room';
import { Traveller } from '../models/Traveller';
import { TravelGroup } from '../models/TravelGroup';

// Sample rooms data
export const rooms: Room[] = [
  { code: '1001', beds: 2, travellerIds: ['t1', 't2'] },
  { code: '1002', beds: 3, travellerIds: ['t3'] },
  { code: '1003', beds: 2, travellerIds: [] },
  { code: '1004', beds: 2, travellerIds: [] },
  { code: '1005', beds: 3, travellerIds: [] },
];

// Sample travellers data
export const travellers: Traveller[] = [
  {
    id: 't1',
    surname: 'Smith',
    firstName: 'John',
    dateOfBirth: '1990-01-01',
    groupId: '12345A',
  },
  {
    id: 't2',
    surname: 'Johnson',
    firstName: 'Jane',
    dateOfBirth: '1992-05-15',
    groupId: '12345A',
  },
  {
    id: 't3',
    surname: 'Williams',
    firstName: 'Robert',
    dateOfBirth: '1988-11-20',
    groupId: '12345B',
  },
];

// Sample travel groups data
export const travelGroups: TravelGroup[] = [
  {
    id: '12345A',
    arrivalDate: '2024-03-20',
    travellerIds: ['t1', 't2'],
  },
  {
    id: '12345B',
    arrivalDate: '2024-03-21',
    travellerIds: ['t3'],
  },
]; 