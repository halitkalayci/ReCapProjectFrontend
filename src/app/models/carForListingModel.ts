import { CarImage } from "./carImage";

export interface CarForListingModel{
    id:number;
    carName:string;
    modelYear:number;
    brandName:string;
    gearType:string;
    km:string;
    colorName:string;
    dailyPrice:number;
    colorCode:string;
    backgroundColorCode:string;
    mainImage:string;
    availableForRent:boolean;
    carImages:CarImage[];
}