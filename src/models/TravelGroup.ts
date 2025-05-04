// Represents a travel group (in-memory only)
export interface TravelGroup {
  // 6 chars, max 2 letters, not starting with 0
  readonly id: string;
  // Arrival date (ISO string)
  arrivalDate: string;
  // Traveller IDs in this group
  travellerIds: string[];
}

export function isValidGroupId(id: string): boolean {
  // Must be exactly 6 characters
  if (id.length !== 6) return false;
  
  // Cannot start with 0
  if (id.startsWith('0')) return false;
  
  // Count letters
  const letterCount = (id.match(/[a-zA-Z]/g) || []).length;
  if (letterCount > 2) return false;
  
  // Only allow letters and numbers
  return /^[a-zA-Z0-9]+$/.test(id);
}

export function isValidTravelGroup(group: TravelGroup): boolean {
  return !!(
    group.id &&
    isValidGroupId(group.id) &&
    group.arrivalDate &&
    Array.isArray(group.travellerIds)
  );
} 