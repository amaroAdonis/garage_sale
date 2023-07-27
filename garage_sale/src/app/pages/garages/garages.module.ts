import { NgModule } from "@angular/core";
import { GaragesComponent } from "./garages.component";
import { CommonModule } from "@angular/common";
import { GaragesRoutingModule } from "./garages-routing.module";
import { HttpClientModule } from "@angular/common/http";
import { GarageCardModule } from "src/app/components/garage-card/garage-card.module";


@NgModule({
    declarations: [
        GaragesComponent
    ],
    imports:[
        CommonModule,
        GaragesRoutingModule,
        HttpClientModule,
        GarageCardModule
    ]
})
export class GaragesModule {}