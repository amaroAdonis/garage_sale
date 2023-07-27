import { NgModule } from "@angular/core";
import { ProductCardComponent } from "./product-card.component";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [
        ProductCardComponent
    ],
    imports: [
        CommonModule,
    ],
    exports: [ProductCardComponent]
})
export class ProductCardModule{}