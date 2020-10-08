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