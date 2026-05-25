import { StaticImageData } from "next/image";

export interface ProductItem {
    id: number;
    title: string;
    image: string | StaticImageData;
    price: number;
    previousPrice?: number;
    rating: number;
    isNew?: boolean;
    discouunt?: string;
}