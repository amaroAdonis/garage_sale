import { NgModule } from "@angular/core";
import { ProductsComponent } from "./products.component";
import { CommonModule } from "@angular/common";
import { ProductsRoutingModule } from "./products-routing.module";
import { HttpClientModule } from "@angular/common/http";
import { __core_private_testing_placeholder__ } from "@angular/core/testing";
import { ProductCardModule } from "src/app/components/product-card/product-card.module";

@NgModule({
    declarations: [
        ProductsComponent,
        
    ],
    imports: [
        CommonModule,
        ProductsRoutingModule,
        HttpClientModule,
        ProductCardModule
        
    ]
})
export class ProductModule{}