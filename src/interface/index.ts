export interface TypeItems {
  number: number;
  name: String;
  picture: JSX.Element;
  price: number;
  count: number;
  key: string;
}

export interface TypeColumns {
  title: string,
  dataIndex: string,
  key: string,
}

export interface TypeAction {
  type: string,
  payload: any,
}

export interface RootReducer {
  products: TypeItems[]
}

export interface TypePrice {
  USD: number;
  EUR: number;
}