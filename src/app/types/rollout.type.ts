export type RolloutType = 'TestGroup' | 'All' | 'MultipleGroups' | 'Custom';

export const ROLLOUT_TO_PRETTY: Record<RolloutType, string> = {
    TestGroup: 'Test Group',
    All: 'All Users',
    MultipleGroups: 'Multiple Groups',
    Custom: 'Custom'
};

export function isRolloutType(value: string): value is RolloutType {
    return value == 'TestGroup' || value == 'All' || value == 'MultipleGroups' || value == 'Custom';
}
