export interface TableAction<T> {
  onEdit(data: T): void
  onAdd(data: T): void
  onCheckDetails(data: T): void
}
