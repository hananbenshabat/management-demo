import { UiAssignmentGroups } from './ui-assignment-groups.interface';

export interface UiAssignment {
    includes: UiAssignmentGroups | null;
    excludes: UiAssignmentGroups | null;
}
