import { Injectable } from "@angular/core";
import { ScreenStrategy } from "./screen-strategy";
import { Product } from "src/app/types/types";
import { HttpClient } from "@angular/common/http";
import { firstValueFrom } from "rxjs";


@Injectable()
export class NewProductStrategy implements ScreenStrategy {

    constructor(private http: HttpClient) {}

    loadProduct(id?: string | undefined): Promise<Product> {
        return Promise.resolve(<Product>{})
    }
    saveProduct(product: Product): Promise<Product> {
        const observable = this.http.post<any>('/api/product', product)
        return firstValueFrom(observable);
    }
    getTitle(): string {
        return "Insira seu novo produto";
    }

}