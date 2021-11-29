import { ResponseModel } from "./responseModel";

export interface GenericResponseModel<T> extends ResponseModel{
    data:T;
}