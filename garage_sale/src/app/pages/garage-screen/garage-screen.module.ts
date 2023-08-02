import { NgModule } from "@angular/core";
import { GarageScreenComponent } from "./garage-screen.component";
import { CommonModule } from "@angular/common";
import { GarageScreenRoutingModule } from "./garage-screen-routing.module";
import { HttpClientModule } from "@angular/common/http";
import { ProductCardModule } from "src/app/components/product-card/product-card.module";

@NgModule({
    declarations: [
        GarageScreenComponent
    ],
    imports: [
        CommonModule,
        GarageScreenRoutingModule,
        HttpClientModule,
        ProductCardModule
    ]
})
export class GarageScreenModule {}