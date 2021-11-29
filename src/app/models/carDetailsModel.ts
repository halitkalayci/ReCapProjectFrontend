import { CarImage } from "./carImage";

export interface CarDetailsModel{
    id:number;
    carName:string;
    modelYear:number;
    brandName:string;
    colorName:string;
    dailyPrice:number;
    carImages:CarImage[];
}