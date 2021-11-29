import { ResponseModel } from "./responseModel";

export interface PageableResponseModel<T> extends ResponseModel{
     data:PageableData<T>
}

export interface PageableData<T> {
     data:T;
     pageSize:number;
     currentPage:number;
     maxPages:number;
}