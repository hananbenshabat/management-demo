export type ContainerType = 'WindowsApp' | 'WebApp' | 'MobileApp' | 'Other';

export function isContainerType(value: string): value is ContainerType {
    return value == 'WindowsApp' || value == 'WebApp' || value == 'MobileApp' || value == 'Other';
}
