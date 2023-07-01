import { NgModule } from "@angular/core";
import { CartScreenComponent } from "./cart-screen.component";
import { CommonModule } from "@angular/common";
import { CartScreenRoutingModule } from "./cart-screen-routing.module";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
    declarations:[
        CartScreenComponent
    ],
    imports:[
        CommonModule,
        CartScreenRoutingModule,
        HttpClientModule
    ]
})
export class CartScreenModule {}