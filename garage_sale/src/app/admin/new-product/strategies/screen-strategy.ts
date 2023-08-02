import { Product } from "src/app/types/types"

export class ScreenStrategy{
    loadProduct(id?: string): Promise<Product> {throw Error("Not implemented")};
    saveProduct(product: Product): Promise<Product> {throw Error("Not implemented!")};
    getTitle(): string {throw Error("Not implemented")}
}