import { Category } from "./category.model";

export class Product {
    id: number;
    purchasePrice: number;
    salePrice: number;
    description: string;
    category: Category;
}