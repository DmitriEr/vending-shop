export interface TypeItems {
  number: number;
  name: String;
  picture: JSX.Element;
  price: number;
  count: number;
  key: string;
  enabled: boolean;
}

export interface TypeColumns {
  title: string,
  dataIndex: string,
  key: string,
}

export interface TypeAction {
  type: string;
  payload: any;
}

export interface RootReducer {
  products: TypeItems[];
  money: number;
  modal: { visibility: boolean, text: string };
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