import { NgModule } from "@angular/core";
import { AdminComponent } from "./admin.component";
import { CommonModule } from "@angular/common";
import { AdminRoutingModule } from "./admin-routing.module";
import { HttpClientModule } from "@angular/common/http";
import { GarageCardModule } from "../components/garage-card/garage-card.module";
import { ProductCardModule } from "../components/product-card/product-card.module";



@NgModule({
    declarations: [
        AdminComponent,
        

    ],
    imports:[
        CommonModule,
        AdminRoutingModule,
        HttpClientModule,
        GarageCardModule,
        ProductCardModule,
    ],
    exports:[AdminComponent]
})
export class AdminModule {}