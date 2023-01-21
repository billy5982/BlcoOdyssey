export interface SearchList {
  [index: string | number]: string | number;
  // all: string;
  // productName: string;
  // brand: string;
  // productContent: string;
}

export interface InputProps {
  value: string;
  setValue: (el: string) => void;
  clickFunc: () => void;
}
