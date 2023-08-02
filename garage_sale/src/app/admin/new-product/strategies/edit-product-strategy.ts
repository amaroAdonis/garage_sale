import { Injectable } from "@angular/core";
import { ScreenStrategy } from "./screen-strategy";
import { Product } from "src/app/types/types";
import { HttpClient } from "@angular/common/http";
import { firstValueFrom } from "rxjs";

@Injectable()
export class EditProductStrategy implements ScreenStrategy {

    constructor(private http: HttpClient){}

    loadProduct(id?: string | undefined): Promise<Product> {
        const observable = this.http.get<Product>(`/api/product/${id}`)
        return firstValueFrom(observable);
    }
    saveProduct(product: Product): Promise<Product> {
        const observable = this.http.put<any>(`/api/product/${product.product_id}`, product)
        return firstValueFrom(observable);
    }
    getTitle(): string {
        return "Edite os dados de seu produto."
    }

}