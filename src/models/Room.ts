// Represents a hotel room (in-memory only)
export interface Room {
  // 4-digit unique numeric room code
  readonly code: string;
  // Number of beds in the room
  beds: number;
  // Traveller IDs currently assigned to this room
  travellerIds: string[];
}

export function isValidRoomCode(code: string): boolean {
  return /^\d{4}$/.test(code);
}

export function canAddTraveller(room: Room): boolean {
  return room.travellerIds.length < room.beds;
}
