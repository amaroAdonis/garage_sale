import { NgModule } from "@angular/core";
import { NewProductComponent } from "./new-product.component";
import { CommonModule } from "@angular/common";
import { NewProductRoutingModule } from "./new-product-routing.module";
import { HttpClientModule } from "@angular/common/http";
import { NgbDropdownModule } from "@ng-bootstrap/ng-bootstrap";

@NgModule({
    declarations: [NewProductComponent],
    imports: [
        CommonModule,
        NewProductRoutingModule,
        NgbDropdownModule,
        HttpClientModule
    ]
})
export class NewProductModule {}