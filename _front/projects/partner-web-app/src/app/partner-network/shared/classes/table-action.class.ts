export interface TableAction<T> {
  onEdit(data: T): void
  onCheckDetails(data: T): void
}
