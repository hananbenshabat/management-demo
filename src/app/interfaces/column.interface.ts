export interface IColumn<T = any> {
    field: keyof T;
    header: string;
    style?: string;
    styleClass?: string;
}
