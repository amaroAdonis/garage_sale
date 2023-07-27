import { NgModule } from "@angular/core";
import { GarageScreenComponent } from "./garage-screen.component";
import { CommonModule } from "@angular/common";
import { GarageScreenRoutingModule } from "./garage-screen-routing.module";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
    declarations: [
        GarageScreenComponent
    ],
    imports: [
        CommonModule,
        GarageScreenRoutingModule,
        HttpClientModule
    ]
})
export class GarageScreenModule {}