export interface TypeItems {
  number: number;
  name: String;
  picture: JSX.Element;
  price: number;
  count: number;
  key: string;
  enabled: boolean;
  select: boolean;
}

export interface TypeColumns {
  title: string,
  dataIndex: string,
  key: string,
  className: string,
}

export interface TypeAction {
  type: string;
  payload: any;
}

export interface TypeModal {
  visibility: boolean;
  text: string;
  footer: string;
}

export interface RootReducer {
  products: TypeItems[];
  money: number;
  modal: TypeModal;
}

export interface TypePrice {
  USD: number;
  EUR: number;
  current: string;
}

export interface TypeActionMoney {
  type: string;
  payload: number;
}