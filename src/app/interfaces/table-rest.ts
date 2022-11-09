import { Customer } from './customer';

export interface TableRestModel {
  id: number;
  numberPlace: number;
  hygiene: number;
  posX: number;
  posY: number;
  idPlace: number;
}

export interface TableRest {
  id: number;
  numberPlace: number;
  hygiene: number;
  posX: number;
  posY: number;
  idPlace: number;
  customers?: Customer[];
}

export interface AssignNewTableForCustomerDto {
  customerId: number;
  tableId: number;
}
