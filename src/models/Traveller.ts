/**
 * Represents a traveller (not persistent, in-memory only).
 */
export interface Traveller {
  /** Unique traveller ID */
  readonly id: string;
  /** Surname of the traveller */
  surname: string;
  /** First name of the traveller */
  firstName: string;
  /** Date of birth (ISO string) */
  dateOfBirth: string; // ISO date string
  /** Group ID this traveller belongs to */
  readonly groupId: string;
}

export function isValidTraveller(traveller: Traveller): boolean {
  return !!(
    traveller.surname &&
    traveller.firstName &&
    traveller.dateOfBirth &&
    traveller.groupId
  );
} 