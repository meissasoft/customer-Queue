export interface ITableData {
  customerName: string;
  appleId: number;
  location: string;
  ipStatus: string;
  waiting: string;
}

export interface ICustomerQueue {
  tabelData: ITableData[];
}
