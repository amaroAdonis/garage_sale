import { Garage } from "src/app/types/types"


export class ScreenStrategy{
    loadGarage(id?: string): Promise<Garage> {throw Error("Not implemented")};
    saveGarage(garage: Garage): Promise<Garage> {throw Error("Not implemented!")};
    getTitle(): string {throw Error("Not implemented")}
}