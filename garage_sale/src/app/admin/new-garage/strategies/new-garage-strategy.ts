import { Injectable } from "@angular/core";
import { ScreenStrategy } from "./screen-strategy";
import { Garage, Product } from "src/app/types/types";
import { HttpClient } from "@angular/common/http";
import { firstValueFrom } from "rxjs";

@Injectable()
export class NewGarageStrategy implements ScreenStrategy {

    constructor(private http: HttpClient) {}

    loadGarage(id?: string | undefined): Promise<Garage> {
        return Promise.resolve(<Garage>{});
    }
    saveGarage(garage: Garage): Promise<Garage> {
        const observable = this.http.post<any>('/api/garage', garage);
        return firstValueFrom(observable);
    }
    getTitle(): string {
        return "Crie sua nova garagem";
    }

}