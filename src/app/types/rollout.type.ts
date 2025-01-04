export type RolloutType = 'TestGroup' | 'All' | 'MultipleGroups' | 'Custom';

export const ROLLOUT_TO_PRETTY: Record<RolloutType, string> = {
    TestGroup: 'Test Group',
    All: 'All Users',
    MultipleGroups: 'Multiple Groups',
    Custom: 'Custom'
};
