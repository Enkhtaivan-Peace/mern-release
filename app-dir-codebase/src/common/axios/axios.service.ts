import { AxiosError, AxiosResponse } from "axios";
import axios from "./http";

export interface IPaginate {
  start: number;
  end: number;
  limit: number;
  prevPage: number;
  nextPage: number;
  pageCount: number;
  total: number;
}
export interface IRes<T> {
  success: boolean;
  result?: T;
  reason?: string;
  error?: unknown;
  message?: string;
  statusCode?: number;
  pagination?: IPaginate;
}

export type TNoobRes<T> = { result: T } | IError;

export async function getData<T>(restUrl: string): Promise<TNoobRes<T>> {
  try {
    const response: AxiosResponse<any> = await axios({
      method: "get",
      url: restUrl,
    });
    console.log("bbbb", response);

    return {
      result: response.data as T,
      ...(response.data.paginate && { paginate: response.data.paginate }),
    };
  } catch (e: unknown) {
    return httpErrorHandler<T>(e);
  }
}

export async function postData<T>(
  restUrl: string,
  data: unknown,
  isFormData: boolean = false
): Promise<TNoobRes<T>> {
  try {
    const response: AxiosResponse<T> = await axios({
      method: "post",
      data,
      url: restUrl,
      withCredentials: true,
      headers: {
        "Content-Type": isFormData ? "multipart/form-data" : "application/json",
        "Access-Control-Allow-Credentials": true,
      },
    });
    return { success: true, result: response.data };
  } catch (e: unknown) {
    return httpErrorHandler<T>(e);
  }
}

export async function putData<T>(
  restUrl: string,
  editedModel: T,
  isFormData: boolean = false
): Promise<TNoobRes<T>> {
  try {
    const response = await axios({
      method: "put",
      data: editedModel,
      url: restUrl,
      headers: {
        "Content-Type": isFormData ? "multipart/form-data" : "application/json",
        "Access-Control-Allow-Credentials": true,
      },
    });
    const val = { success: true, result: response.data };
    return val;
  } catch (e: unknown) {
    return httpErrorHandler<T>(e);
  }
}

export async function patchData<T>(
  restUrl: string,
  data: T,
  isFormData: boolean = false
): Promise<TNoobRes<T>> {
  try {
    const response = await axios({
      method: "patch",
      data,
      url: restUrl,
      headers: {
        "Content-Type": isFormData ? "multipart/form-data" : "application/json",
        "Access-Control-Allow-Credentials": true,
      },
    });
    const val = { success: true, result: response.data };
    return val;
  } catch (e: unknown) {
    return httpErrorHandler<T>(e);
  }
}

export async function deleteData<T>(restUrl: string): Promise<TNoobRes<T>> {
  try {
    const response = await axios({
      method: "delete",
      url: restUrl,
    });
    return response.data;
  } catch (e: unknown) {
    return httpErrorHandler<T>(e);
  }
}

export interface IError {
  success: boolean;
  message: string;
  code?: string | number;
  status?: number;
  statusText?: string;
  reason?: string;
}

export function httpErrorHandler<T>(e: unknown): IError {
  console.error(e);
  if (axios.isAxiosError(e)) {
    const error = e as AxiosError<T>;
    let reason: string | undefined;
    if (typeof error?.response?.data === "string") {
      reason = error.response.data;
    }
    return {
      success: false,
      message: error.message,
      code: error?.code!,
      status: error?.response?.status!,
      statusText: error?.response?.statusText!,
      reason,
    };
  }
  return {
    success: false,
    message: "Unexpected error",
  };
}
