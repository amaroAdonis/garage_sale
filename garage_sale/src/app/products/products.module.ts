import { NgModule } from "@angular/core";
import { ProductsComponent } from "./products.component";
import { CommonModule } from "@angular/common";
import { ProductsRoutingModule } from "./products-routing.module";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
    declarations: [
        ProductsComponent
    ],
    imports: [
        CommonModule,
        ProductsRoutingModule,
        HttpClientModule
    ]
})
export class ProductModule{}