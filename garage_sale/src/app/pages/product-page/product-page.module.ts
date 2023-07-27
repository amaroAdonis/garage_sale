import { NgModule } from "@angular/core";
import { ProductPageComponent } from "./product-page.component";
import { CommonModule } from "@angular/common";
import { ProductPageRoutingModule } from "./product-page-routing.module";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
    declarations: [ProductPageComponent],
    imports: [
        CommonModule,
        ProductPageRoutingModule,
        HttpClientModule
    ]
})
export class ProductPageModule {}