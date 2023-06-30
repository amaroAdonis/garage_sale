import { NgModule } from "@angular/core";
import { GaragesComponent } from "./garages.component";
import { CommonModule } from "@angular/common";
import { GaragesRoutingModule } from "./garages-routing.module";
import { HttpClientModule } from "@angular/common/http";


@NgModule({
    declarations: [
        GaragesComponent
    ],
    imports:[
        CommonModule,
        GaragesRoutingModule,
        HttpClientModule
    ]
})
export class GaragesModule {}