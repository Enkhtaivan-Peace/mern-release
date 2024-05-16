declare type JsxChildren = {
  children: JSX.Element[] | JSX.Element | React.ReactNode | string;
};

declare type TMENU = {
  text: string;
  href: string;
};

declare type TButton = {
  onClick: (e?: any) => any;
  text?: string;
  isActive?: boolean;
};

declare type TPaginate = {
  total: number;
  pageCount: number;
  start: number;
  end: number;
  limit: number;
  nextPage: number;
  prevPage: number;
};

declare type TRes<T> = {
  success?: boolean;
  message?: string;
  statusCode?: number;
  data?: T;
  paginate?: TPaginate;
  token?: string;
};

declare type TFormElement = {
  id?: string;
  name: string;
  placeholder?: string;
  required?: boolean;
  value?: string;
  className?: string;
  onChange?: (e: any, isCheckbox?: boolean) => void;
  onClick?: () => void;
};

declare type TAxiosError = {
  response: {
    status: number;
  };
};

declare type TShape = {
  width: number;
  height: number;
};

declare type TCrud = {
  type: "ADD" | "DELETE" | "EDIT" | "GET";
};

declare type TPaginatedState<T> = {
  data: T;
  success?: boolean;
  paginate?: IPaginate;
};

declare interface Window {
  ethereum?: any;
}

declare type TScroll = {
  scrollWidth: number;
  scrollHeight: number;
};

declare type TPageProps = {
  searchParams?: TSearchParams;
};

declare type TSearchParams = {
  search?: string | null;
  page?: string | null;
  limit?: string | null;
};

declare type TListReq = Pick<TSearchParams, "search"> & {
  page?: number;
  limit?: number;
};
