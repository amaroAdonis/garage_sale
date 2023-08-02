import { Injectable } from "@angular/core";
import { ScreenStrategy } from "./screen-strategy";
import { Garage } from "src/app/types/types";
import { HttpClient } from "@angular/common/http";
import { firstValueFrom } from "rxjs";

@Injectable()
export class EditGarageStrategy implements ScreenStrategy {

    constructor(private http: HttpClient) {}

    loadGarage(id?: string | undefined): Promise<Garage> {
        const observable = this.http.get<Garage>(`/api/garage/${id}`)
        return firstValueFrom(observable);
    }
    saveGarage(garage: Garage): Promise<Garage> {
        const observable = this.http.put<any>(`/api/product/${garage.garage_id}`, garage)
        return firstValueFrom(observable);
        
    }
    getTitle(): string {
        return "Edite os dados de sua garagem.";
    }

    

}