/**
 * Represents a travel group (not persistent, in-memory only).
 */
export interface TravelGroup {
  /** 6 chars, max 2 letters, not starting with 0 */
  readonly id: string;
  /** Arrival date (ISO string) */
  arrivalDate: string;
  /** Traveller IDs in this group */
  travellerIds: string[];
}

export function isValidGroupId(id: string): boolean {
  // 6 chars, max 2 letters, not starting with 0
  if (!/^[A-Za-z0-9]{6}$/.test(id)) return false;
  if (/^0/.test(id)) return false;
  const letterCount = (id.match(/[A-Za-z]/g) || []).length;
  return letterCount <= 2;
} 