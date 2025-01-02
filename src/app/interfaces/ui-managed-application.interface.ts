import { RolloutType } from '../types/rollout.type';
import { ContainerType } from '../types/container.type';
import { UiAssignment } from './ui-assignment.interface';

export interface UiManagedApplication {
    identifiers: string[];
    type: ContainerType;
    id: number;
    appName: string;
    enabled: boolean;
    version: number;
    isOOtB: boolean;
    lastMod: number;
    deletable: boolean;
    canBeEnabledDisabled: boolean;
    editable: boolean;
    activities: number;
    rollout: RolloutType;
    assignment: UiAssignment | null;
    urls: string[] | null;
    isB2E: boolean;
}
